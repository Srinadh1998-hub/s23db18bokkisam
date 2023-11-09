var student = require('../models/student');
// List of all student
exports.student_list = function(req, res) {
res.send('NOT IMPLEMENTED: student list');
};
// for a specific student.
exports.student_detail = function(req, res) {
res.send('NOT IMPLEMENTED: student detail: ' + req.params.id);
};
// Handle student create on POST.
exports.student_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: student create POST');
};
// Handle student delete form on DELETE.
exports.student_delete = function(req, res) {
res.send('NOT IMPLEMENTED: student delete DELETE ' + req.params.id);
};
// Handle student update form on PUT.
exports.student_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: student update PUT' + req.params.id);
};