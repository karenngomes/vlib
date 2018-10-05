package com.vlib.repositories

import com.vlib.models.RentedBook
import com.vlib.utils.Status
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface RentedBookRepository : MongoRepository<RentedBook, String> {
    fun findByUserIdAndStatus(userId: String, status : Status = Status.ANDAMENTO) : List<RentedBook>
}