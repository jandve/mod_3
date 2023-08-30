How it works

- 1 DB
    - docker should be running from this point
    - go to the root directory for this project and run the command `docker compose up -d db`
    - DB will be automatically created with a default user set as admin

- 2 Backend Development
    - go to to the root directory for this project and run the command `npm run watch`

- 3 Test Endpoint
    - a tool similar to postman can be used to test the endpoints

# Endpoints Documented

    Users CRUD:
        get /users
            - Return all users in the table users
        get /users/:id
            - Return an specific user given an ID
        get /users/age-avg
            - Return the age average from the table users
        post /users
            - Creates a user all the information is required
            - Required information: 
            - ci, name, first_lastname, second_lastname, birth, age
            - Return the created user object
        put /users/:id
            - Edit a specific user given an ID, all the information is required
            - Required information: 
            - ci, name, first_lastname, second_lastname, birth, age
            - Return the edited user object
        delete /users/:id
            - Delete a user given an ID.
    
