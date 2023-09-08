const express = require('express');
const conn = require('../utils/dbconnect.js')
const router = express.Router();


//show all employees
router.get('/api/employees', (req, res) => {
    let sql = "SELECT * FROM employees";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//get sum salary by gender
router.get('/api/sumsalary', (req, res) => {
    let sql = "SELECT gender, sum(salary) sum_salary FROM employees GROUP BY gender";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});


//show single employee
router.get('/api/employees/:id', (req, res) => {
    let sql = "SELECT * FROM employees WHERE emp_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});


//add new employee
router.post('/api/employees', (req, res) => {
    let data = { first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, gender: req.body.gender, salary: req.body.salary };
    let sql = "INSERT INTO employees SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        //results.message = "1 row inserted.";
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//update employee
router.put('/api/employees/:id', (req, res) => {
    let sql = "UPDATE employees SET first_name='" + req.body.first_name + "', last_name='" + req.body.last_name + "', email='" + req.body.email + "', gender='" + req.body.gender + "', salary=" + req.body.salary + " WHERE emp_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

//Delete employee
router.delete('/api/employees/:id', (req, res) => {
    let sql = "DELETE FROM employees WHERE emp_id=" + req.params.id;
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": results }));
    });
});

module.exports = router;