package com.vlib.utils

import java.io.BufferedReader
import java.io.DataOutputStream
import java.io.IOException
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL
import java.util.HashMap

/**
 * This data class hold the response code and
 * state of object response.
 *
 */
data class RequestResponse(var responseState: String = "",
                           var responseCode: Int = 0)

/**
 * This class provides a fluent interface to
 * make some HTTP requests.
 * It's use requires the desired verb,
 * header parameters, the object state as a
 * string and you finish by telling which verb implement.
 *
 * @author Aurelio Buarque (abuarquemf@gmail.com)
 * @Github https://github.com/ABuarque
 */
class RequestMaker {

    private companion object {
        const val GET_METHOD = "GET"
        const val POST_METHOD = "POST"
        const val PUT_METHOD = "PUT"
        const val DELETE_METHOD = "DELETE"
        const val PATCH_METHOD = "PATCH"
    }

    private var endpoint: String? = null
    private var objectState: String? = null
    private val headerParameters = HashMap<String, String>()

    /**
     * Here it's define endpoint request as a String object
     *
     * @param request endpoint
     * @return a referece for this object
     */
    fun toEndpoint(endpoint: String): RequestMaker {
        this.endpoint = endpoint
        return this
    }

    /**
     * This method sets sets the header of request.
     * To use it, add as a key/value pair the properties desired.
     *
     * Ex: .addToHeader("Content-Type", "application/json")
     *
     * @param key property
     * @param value property
     * @return a reference to this
     */
    fun addToHeader(key: String, value: String): RequestMaker {
        this.headerParameters[key] = value
        return this
    }

    /**
     * This method gets the state of object request in
     * JSON format.
     * A tip to use it, is use Google's Gson API that
     * gets an instance and parses it into a JSON string.
     *
     * @param object state as string in JSON format
     * @return a reference to this
     */
    fun withObjectRequest(objectState: String): RequestMaker {
        this.objectState = objectState
        return this
    }

    /**
     * This method invokes request handler passing as
     * parameter GET_METHOD val to say it should execute a GET
     * and returns request response as string.
     *
     * @return response as string
     */
    fun doGet() = requestHandler(GET_METHOD)

    /**
     * This method invokes request handler passing as
     * parameter POST_METHOD val to say it should execute a POST
     * and returns request response as string.
     *
     * @return response as string
     */
    fun doPost() = requestHandler(POST_METHOD)

    /**
     * This method invokes request handler passing as
     * parameter DELETE_METHOD val to say it should execute a DELETE
     * and returns request response as string.
     *
     * @return response as string
     */
    fun doDelete() = requestHandler(DELETE_METHOD)


    /**
     * This method invokes request handler passing as
     * parameter PUT_METHOD val to say it should execute a PUT
     * and returns request response as string.
     *
     * @return response as string
     */
    fun doPut() = requestHandler(PUT_METHOD)

    /**
     * This method invokes request handler passing as
     * parameter PATCH_METHOD val to say it should execute a PATCH
     * and returns request response as string.
     *
     * @return response as string
     */
    fun doPatch() = requestHandler(PATCH_METHOD)

    /**
     * It gets HTTP verb to implement as a string
     * and executes the proper request method.
     *
     * @param http verb to do
     * @return request response as string
     */
    private fun requestHandler(httpVerb: String): RequestResponse {
        var response = "{}"
        var responseCode = 0
        try {
            val url = URL(endpoint)
            val connection = url!!.openConnection() as HttpURLConnection
            connection!!.doInput = true
            connection!!.doOutput = true
            connection!!.requestMethod = httpVerb
            for((key, value) in headerParameters)
                connection!!.setRequestProperty(key, value)
            if(httpVerb != GET_METHOD) {
                val output = DataOutputStream(connection!!.outputStream)
                output.writeBytes(objectState)
                output.close()
            }
            responseCode = connection.responseCode
            if((connection.responseCode / 100) == 2) {
                val input = BufferedReader(InputStreamReader(connection!!.inputStream))
                val responseBuffer = StringBuffer()
                var inputLine = input.readLine()
                while (inputLine != null) {
                    responseBuffer.append(inputLine)
                    inputLine = input.readLine()
                }
                input.close()
                response = responseBuffer!!.toString()
            }
        } catch (e: IOException) {
            e.printStackTrace()
        }
        return RequestResponse(response, responseCode)
    }

}