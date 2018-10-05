package com.vlib.controllers

import com.vlib.models.Category
import com.vlib.repositories.BookRepository
import com.vlib.repositories.CategoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/v1/category")
class CategoryController {
    @Autowired
    lateinit var categoryRepository: CategoryRepository

    @CrossOrigin("*")
    @RequestMapping(method = [RequestMethod.POST])
    fun createCategory(@RequestBody category: Category) : ResponseEntity<Category>{
        return try {
            ResponseEntity(categoryRepository.save(category),HttpStatus.CREATED)
        }catch (e : Exception) {
            ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @CrossOrigin("*")
    @RequestMapping(method = [RequestMethod.GET])
    fun getAll() : ResponseEntity<List<Category>> {
        return try {
            ResponseEntity(categoryRepository.findAll(),HttpStatus.OK)
        }catch (e : Exception) {
            ResponseEntity(HttpStatus.NO_CONTENT)
        }
    }

}