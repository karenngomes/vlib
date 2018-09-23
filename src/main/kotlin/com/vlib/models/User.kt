package com.vlib.models

import org.springframework.data.annotation.Id

abstract class User (
        @Id
        val id : String? = null,

        val name : String = "",
        val email : String = "",
        val password : String = "",
        val address : String = "",
        val telephone : String = ""
)