# API Gateway

This is a fun side project for an API gateway. Currently, it only has one service for email, which doesn't send anywhere.

## Goal

The goal of this project is to learn how to create an API gateway and potentially use it on client websites in the future.

## How it works

1. A request comes into the API gateway
2. Depending on the endpoint, the app sends the request to the required service
3. The service is it's own app that handles the requests apart from the API gateway app
4. The errors and results are output in the response, best seen in a tool like Postman

The main use for the API gateway main app is to send requests to a service to handle the request.
