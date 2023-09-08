const express = require('express');
const conn = require('../utils/dbconnect.js');
const router = express.Router();

//show all requests
router.get('/api/requests', (req, res) => {
  let sql = "SELECT * FROM requests ORDER BY id ASC";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

router.get('/api/countrequests', (req, res) => {
  let sql = 'SELECT fiscal_year,count(*) AS sumrequests FROM requests GROUP BY fiscal_year';
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

router.get('/api/schoolrequests', (req, res) => {
  let sql = 'SELECT school,count(*) AS schoolrequests FROM requests GROUP BY school';
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

//show single requests
router.get('/api/requests/:id', (req, res) => {
  let sql = 'SELECT * FROM requests WHERE request_id=' + req.params.id;
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

router.post('/api/requests', (req, res) => {
  let data = {
    fullname: req.body.fullname,
    school: req.body.school,
    fiscal_year: req.body.fiscal_year,
    meeting_number: req.body.meeting_number,
    publication: req.body.publication,
    level_type: req.body.level_type,
    level: req.body.level,
    type: req.body.type,
    compensation: req.body.compensation,
    request_date: req.body.request_date,
    budget_source: req.body.budget_source,
    publication_name: req.body.publication_name,
    published_year_issue_pages: req.body.published_year_issue_pages,
    first_author: req.body.first_author,
    all_author: req.body.all_author,
    remark: req.body.remark,
  };
  let sql = 'INSERT INTO requests SET ?';
  conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

router.put('/api/requests/:id', (req, res) => {
  let sql =
    "UPDATE requests SET school='" +
    req.body.school +
    "',fullname='" +
    req.body.fullname +
    "',fiscal_year='" +
    req.body.fiscal_year +
    "',meeting_number='" +
    req.body.meeting_number +
    "',publication='" +
    req.body.publication +
    "',level_type='" +
    req.body.level_type +
    "',level='" +
    req.body.level +
    "',type='" +
    req.body.type +
    "',compensation='" +
    req.body.compensation +
    "',request_date='" +
    req.body.request_date +
    "',budget_source='" +
    req.body.budget_source +
    "',publication_name='" +
    req.body.publication_name +
    "',published_year_issue_pages='" +
    req.body.published_year_issue_pages +
    "',first_author='" +
    req.body.first_author +
    "',all_author='" +
    req.body.all_author +
    "',remark='" +
    req.body.remark +
    "' WHERE request_id='" +
    req.params.id +
    "'";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

router.delete('/api/requests/:id', (req, res) => {
  let sql = 'DELETE FROM requests WHERE request_id=' + req.params.id;
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
});

module.exports = router;
