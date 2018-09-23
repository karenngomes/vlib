package com.vlib.controllers

import com.vlib.models.Category
import com.vlib.repositories.CategoryRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/category")
class CategoryController {
    @Autowired
    lateinit var categoryRepository: CategoryRepository

    @RequestMapping(method = [RequestMethod.POST])
    fun createCategory(@RequestBody category: Category) : ResponseEntity<Category>{
        return try {
            ResponseEntity(categoryRepository.save(category),HttpStatus.CREATED)
        }catch (e : Exception) {
            ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @RequestMapping(method = [RequestMethod.GET])
    fun findAll() : ResponseEntity<List<Category>> {
        return try {
            ResponseEntity(categoryRepository.findAll(),HttpStatus.OK)
        }catch (e : Exception) {
            ResponseEntity(HttpStatus.NO_CONTENT)
        }
    }

}