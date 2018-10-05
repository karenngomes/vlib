package com.vlib.repositories

import com.vlib.models.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : MongoRepository<User, String> {
    fun findByEmail(email : String) : User?
}