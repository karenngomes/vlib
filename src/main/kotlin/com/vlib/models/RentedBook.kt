package com.vlib.models

import com.vlib.utils.Status
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document
data class RentedBook (
        @Id
        val id : String? = null,

        val book: Book? = null,

        val user : User? = null,

        val currentDate : Calendar = Calendar.getInstance(),

        private var limitDate : Calendar = Calendar.getInstance(),

        var taxValue : Double = 0.0,

        var status : Status = Status.ANDAMENTO
) {
        fun getLimitDate() = this.limitDate
        fun setLimitDate(limitDate: Calendar) {
                this.limitDate = limitDate
        }
}