package com.vlib.models

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Tax (
    @Id
    val id : String? = null
)