package com.vlib.models

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty
import javax.validation.constraints.NotNull

@Document
data class Book (
        @Id
        val id : String? = null,

        @NotEmpty @NotBlank @NotNull
        val title : String = "",

        val subtitle : String = "",

        val thumbnail : String = "",

        val description : String = "",

        val publisher : String = "",

        val publishedDate : Date,

        val authors : List<String> = listOf(),

        val categories : List<Category> = listOf()

)