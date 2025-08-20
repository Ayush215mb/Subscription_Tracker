
Type of API

1. RESTful api 
    representatial state transfer api
    it uses urls and https methods like get, post, put, delete
    stateless meaning each reqs is independent and doesn't match with previous reqs
    use jSON
2. graphql APi by facebook/meta
    offer more flexibility
    have only one url which is /graphql
    client can specify what they want and they will only get that data
    good for complex and large dataset
    reduces over-fetching and under fetching

Backend languages and their frameworks

1. Python- django
2. ruby- rubyrails
3. Java- spring
4. Javascript- express, hono, nestjs

Databases

1. Relational
    stores data in structured tables with rows and colums
    uses sql  
    most famous sql database are mysql and postgress

2. non-relational or no sql
    they offer more flexibility 
    doesn't rely on structure
    perfect for not structured or semi structured dataset
    good for handling large datasets
    type of nosql
    1. mongo db where data is store in json format
    2. redis where data is stored in key value pair
    


Backend Artitechture

1. Monolithic architecture- everything is in one place
2. MicroServices- there are different backend for different use and they all communicate using APIs
3. Serverless- aws lambda handles the scalability 