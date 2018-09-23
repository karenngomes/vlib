package com.vlib.models

import org.jetbrains.annotations.NotNull
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotEmpty

@Document
data class Category (
        @Id
        val id : String? = null,

        @NotNull
        @NotBlank
        @NotEmpty
        val name : String = ""
)