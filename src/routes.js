const express = require('express');
const routes = express();

const teachers = require('./controllers/teachers');

//API REST

routes.get('/teachers', teachers.teachersList);
routes.get('/teachers/:id', teachers.getTeachers);
routes.post('/teachers', teachers.postTeacher );
routes.put('/teachers/:id', teachers.putTeacher);
routes.patch('/teachers/:id', teachers.patchTeacher);
routes.delete('/teachers/:id', teachers.deleteTeacher);

module.exports = routes;// module.exports = send to file(export)