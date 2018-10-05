package com.vlib.controllers

import com.vlib.models.RentedBook
import com.vlib.models.User
import com.vlib.repositories.UserRepository
import com.vlib.utils.userModels.LoginModel
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.lang.Exception

@RestController
@RequestMapping("/v1/user")
class UserController {
    @Autowired
    lateinit var userRepository: UserRepository

    @CrossOrigin("*")
    @RequestMapping("/signup",method = [RequestMethod.POST])
    fun signUp(@RequestBody user : User) : ResponseEntity<Any> {
        return try {
            ResponseEntity(userRepository.save(user),HttpStatus.CREATED)
        }catch (e : Exception) {
            ResponseEntity(e.message,HttpStatus.BAD_REQUEST)
        }
    }

    @CrossOrigin("*")
    @RequestMapping("/signin",method = [RequestMethod.POST])
    fun signIn(@RequestBody loginModel : LoginModel) : ResponseEntity<User> {
        val foundClient : User? = userRepository.findByEmail(loginModel.email)
        if(foundClient != null && foundClient.password == loginModel.password) {
            return ResponseEntity(foundClient, HttpStatus.OK)
        }
        return ResponseEntity(HttpStatus.NOT_FOUND)
    }

    @CrossOrigin("*")
    @RequestMapping("/{userId}",method = [RequestMethod.GET])
    fun findById(@PathVariable userId : String) : ResponseEntity<User> {
        return try {
            ResponseEntity(userRepository.findById(userId).get(),HttpStatus.OK)
        }catch (e : Exception) {
            print(e.message)
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

    @CrossOrigin("*")
    @RequestMapping("/books/{userId}", method = [RequestMethod.GET])
    fun getRentedBooks(@PathVariable userId : String) : ResponseEntity<List<RentedBook>> {
        val foundClient : User? = userRepository.findById(userId).get()

        if(foundClient != null) {
            return ResponseEntity(foundClient.rentedBooks,HttpStatus.OK)
        }else {
            return ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }

}