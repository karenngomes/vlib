package com.vlib.models

import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Client (
        val rentedBooks : MutableList<Book> = mutableListOf()
) : User()