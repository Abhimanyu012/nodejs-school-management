const mysql = require('mysql');
const dbConfig = require('../../config/db');

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Function to add a new school
const addSchool = (schoolData) => {
    return new Promise((resolve, reject) => {
        const { name, address, latitude, longitude } = schoolData;
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        connection.query(query, [name, address, latitude, longitude], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results.insertId);
        });
    });
};

// Function to retrieve all schools
const getAllSchools = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM schools';
        connection.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

// Export the functions
module.exports = {
    addSchool,
    getAllSchools
};