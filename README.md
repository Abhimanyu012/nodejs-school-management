# Node.js School Management API

This project is a Node.js application that provides a set of APIs for managing school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a specified location.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Add School](#add-school)
  - [List Schools](#list-schools)
- [Postman Collection](#postman-collection)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nodejs-school-management
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up the environment variables in the `.env` file. You can use the `.env.example` file as a reference.

5. Start the application:
   ```
   npm start
   ```

## Usage

The API can be accessed at `http://localhost:3000` (or the port specified in your environment variables).

## API Endpoints

### Add School

- **Endpoint:** `/addSchool`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.345678,
    "longitude": 98.765432
  }
  ```
- **Description:** Adds a new school to the database. Validates input data before insertion.

### List Schools

- **Endpoint:** `/listSchools`
- **Method:** `GET`
- **Parameters:**
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Description:** Retrieves a list of schools sorted by proximity to the user's location.

## Postman Collection

A Postman collection is included in the project to facilitate testing of the APIs. You can find it in the `postman_collection.json` file.

## License

This project is licensed under the MIT License.