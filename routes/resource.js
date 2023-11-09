var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var student_controller = require('../controllers/student');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// student ROUTES 
// POST request for creating a student.
router.post('/students', student_controller.student_create_post);
// DELETE request to delete student.
router.delete('/students/:id', student_controller.student_delete);
// PUT request to update student.
router.put('/students/:id', student_controller.student_update_put);
// GET request for one student.
router.get('/students/:id', student_controller.student_detail);
// GET request for list of all student items.
router.get('/students', student_controller.student_list);
module.exports = router;