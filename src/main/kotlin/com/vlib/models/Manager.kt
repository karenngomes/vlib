package com.vlib.models

import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Manager (
        val cnpj : String = ""
) : User()