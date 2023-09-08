const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();
app.use(express.json(), cors());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// const dept_router = require('./routes/departments.js');
// const emp_router = require('./routes/employees.js');
const req_router = require('./routes/requests.js');

// app.use(dept_router);
// app.use(emp_router);
app.use(req_router);

//Server listening
app.listen(port, () => {
  console.log('Server started on port ', port);
});
