package com.vlib

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class VlibApplication

fun main(args: Array<String>) {
    runApplication<VlibApplication>(*args)
}
