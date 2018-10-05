package com.vlib.controllers

import com.vlib.models.RentedBook
import com.vlib.models.User
import com.vlib.repositories.UserRepository
import com.vlib.repositories.RentedBookRepository
import com.vlib.utils.Status
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/v1/rented")
class RentedBookController {
    @Autowired
    lateinit var rentedBookRepository: RentedBookRepository

    @Autowired
    lateinit var userRepository: UserRepository

    @CrossOrigin("*")
    @RequestMapping(method=[RequestMethod.POST])
    fun save(@RequestBody rentedBook: RentedBook) : ResponseEntity<RentedBook> {
        return try {
            var calendar : Calendar = Calendar.getInstance()
            calendar.add(Calendar.DAY_OF_MONTH,7)
            rentedBook.setLimitDate(calendar)

            val user : User = userRepository.findById(rentedBook.user!!.id!!).get()
            user.rentedBooks.add(rentedBook)
            userRepository.save(user)

            ResponseEntity(rentedBookRepository.save(rentedBook),HttpStatus.CREATED)
        }catch (e : Exception) {
            print(e.message)
            ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @CrossOrigin("*")
    @RequestMapping("/{userId}", method = [RequestMethod.GET])
    fun findByUser(@PathVariable userId : String) : ResponseEntity<List<RentedBook>> {
        return try {
            val rentedBooks : List<RentedBook> = rentedBookRepository.findByUserIdAndStatus(userId)

           rentedBooks.forEach {
               if(it.getLimitDate() > Calendar.getInstance()) {
                   it.status = Status.ATRASADO
                   rentedBookRepository.save(it)
               }
           }

            val late : List<RentedBook> = rentedBookRepository.findByUserIdAndStatus(userId,Status.ATRASADO)
            late.forEach {
                it.taxValue += (Calendar.getInstance().timeInMillis - it.getLimitDate().timeInMillis * 3).toDouble()
            }

            ResponseEntity(rentedBooks,HttpStatus.OK)
        }catch (e : Exception) {
            ResponseEntity(HttpStatus.NO_CONTENT)
        }
    }

}
