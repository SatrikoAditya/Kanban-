**KANBAN**
----
  'aplikasi kanban'

* **URL**

  /kanban

* **Method:**

  `POST`
  
*  **URL Params**

   'none'

* **Data Params**

  ```json
    {
        "title":"string",
        "description":"string",
        "category": "string"
    }
  ```

  * **Headers**

  ```json
  access_token: "string"
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 <br />
    **Content:** 
    ```json
    {
        "message": "Success create new kanban",
        "data": {
            "id": "integer",
            "title": "string",
            "description": "string",
            "category": "string",
            "userId": "integer",
            "userEmail": "string",
            "updatedAt": "timestamp",
            "createdAt": "timestamp"
            }
    }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ allError : "Internal server error" }`
  
  OR

  * **Code:** 400 SequelizeValidationError <br />
    **Content:** `{ allError : "Title is required" }`




**KANBAN**
----
  'aplikasi kanban'

* **URL**

  /kanban

* **Method:**

  `GET`
  
*  **URL Params**

   'none'

* **Data Params**

  'none'

* **Headers**

  ```json
  access_token: "string"
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    [
      {
        data: [
            {
                "id": "integer",
                "title": "string",
                "description": "string",
                "category": "string",
                "userId": "integer",
                "userEmail": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
        ]
      }
    ]
    
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

    OR

  * **Code:** 400 JsonWebTokenError <br />
    **Content:** `{ allError : "invalid Token" }

**KANBAN**
----
  'aplikasi kanban'

* **URL**

  /kanban

* **Method:**

  `GET`
  
*  **URL Params**

  **Required:**
 
  `id=[integer]`

* **Data Params**

  'none'

* **Headers**

  ```json
  access_token: "string"
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        {
            "data": {
                "id": "integer",
                "title": "string",
                "description": "string",
                "category": "string",
                "userId": "integer",
                "userEmail": "string",
                "createdAt": "timestamp",
                "updatedAt": "timestamp"
            }
        }
    }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

    OR

  * **Code:** 403 AUTHORIZATION_FAILED <br />
    **Content:** `{ allError : "access forbidden" }

**KANBAN**
----
  'aplikasi kanban'

* **URL**

  /kanban

* **Method:**

  `PUT`
  
*  **URL Params**

  **Required:**
 
  `id=[integer]`

* **Data Params**

    ```json
    {
        "title":"string",
        "description":"string",
        "category":"string"
    }
  ```

* **Headers**

  ```json
  access_token: "string"
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "msg": "success edit data"
    }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

  OR

  * **Code:** 404 DATA_NOT_FOUND <br />
    **Content:** `{ error : "Data not found" }`
  
  OR

  * **Code:** 400 SequelizeValidationError <br />
    **Content:** `{ error : "Title is required" }`
    
  OR

  * **Code:** 403 AUTHORIZATION_FAILED <br />
    **Content:** `{ error : "Access Forbidden" }`


**KANBAN**
----
  'aplikasi kanban'

* **URL**

  /kanban

* **Method:**

  `DELETE`
  
*  **URL Params**

  **Required:**
 
  `id=[integer]`

* **Data Params**

  'none'

* **Headers**

  ```json
  access_token: "string"
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
    {
        "msg": "success delete data",
    }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

  OR

  * **Code:** 404 DATA_NOT_FOUND <br />
    **Content:** `{ error : "Data not found" }`

  OR

  * **Code:** 403 AUTHORIZATION_FAILED <br />
    **Content:** `{ error : "Access Forbidden" }`


**KANBAN**
----
  'aplikasi kanban'

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**
  
  'none'

* **Data Params**

  ```json
    {
        "email":"string",
        "password":"string"
    }
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
        "msg": "register user success",
        "id": "integer",
        "email": "integer",
        "organization": "string"
      }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

  OR

  * **Code:** 400 SequelizeValidationError <br />
    **Content:** `{ error : "Email is required" }`


**KANBAN**
----
  'aplikasi kanban'

* **URL**

  /login

* **Method:**

  `GET`
  
*  **URL Params**
  
  'none'

* **Data Params**

  ```json
    {
        "email":"string",
        "password":"string"
    }
  ```

* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 <br />
    **Content:** 
    ```json
      {
          "message": "string",
          "email": "string",
          "token": "string"
      }
  ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal server error <br />
    **Content:** `{ error : "Internal server error" }`

  OR

  * **Code:** 400 LOGIN_FAILED <br />
    **Content:** `{ error : "Invalid email or password" }`

