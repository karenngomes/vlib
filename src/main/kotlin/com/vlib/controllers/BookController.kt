package com.vlib.controllers

import com.vlib.models.Book
import com.vlib.repositories.BookRepository
import com.vlib.utils.RequestMaker
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import sun.misc.Request
import javax.xml.ws.Response

@RestController
@RequestMapping("/v1/book")
class BookController {
    @Autowired
    lateinit var bookRepository: BookRepository

    @RequestMapping(method = [RequestMethod.GET])
    fun getAll() : ResponseEntity<List<Book>> {
        return try {
            ResponseEntity(bookRepository.findAll(), HttpStatus.OK)
        }catch (e : Exception) {
            ResponseEntity(HttpStatus.NO_CONTENT)
        }
    }

    @RequestMapping(method = [RequestMethod.POST])
    fun createBook(@RequestBody book : Book) : ResponseEntity<Book> {
        return try {
            ResponseEntity(bookRepository.save(book), HttpStatus.CREATED)
        }catch (e : Exception) {
            ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @RequestMapping("/filter/{theme}", method = [RequestMethod.GET])
    fun findByTheme(@PathVariable theme : String) : ResponseEntity<Any>{
        return try {
            val requestResponse = RequestMaker().toEndpoint("https://www.googleapis.com/books/v1/volumes?q=${theme}&maxResults=10&orderBy=relevance&key=AIzaSyBZQfbPBbo_fo-KHqTSHYiOkt0aneSeQJU")
                    .addToHeader("Content-Type", "application/json")
                    .doGet()
            ResponseEntity(requestResponse.responseState,HttpStatus.OK)
        }catch (e : Exception) {
            println(e.message)
            ResponseEntity(HttpStatus.NOT_FOUND)
        }
    }


}