package com.vlib.models

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class User (
        @Id
        val id : String? = null,
        val name : String = "",
        val email : String = "",
        val password : String = "",
        val rentedBooks : MutableList<RentedBook> = mutableListOf(),
        val totalTax : Double = 0.0
)