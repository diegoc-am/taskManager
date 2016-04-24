'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var task = require('./routes/tasks');

var app = express();

app.use(bodyParser.json());

app.get('/tasks', task.findAll);
app.get('/tasks/:id', task.findById);
app.post('/tasks', task.addTask);
app.put('/tasks/:id', task.updateTask);
app.delete('/tasks/:id', task.deleteTask);

app.listen(3000);
console.log('Listening on port 3000...');
