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

// Handle student delete form on DELETE.
exports.student_delete = function(req, res) {
res.send('NOT IMPLEMENTED: student delete DELETE ' + req.params.id);
};
// Handle student update form on PUT.
exports.student_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: student update PUT' + req.params.id);
};

// List of all student
exports.student_list = async function(req, res) {
    try{
    thestudent = await student.find();
    res.send(thestudent);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// VIEWS
// Handle a show all view
exports.student_view_all_Page = async function(req, res) {
try{
thestudent = await student.find();
res.render('Student', { title: 'student Search Results', results: thestudent });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


// Handle student create on POST.
exports.student_create_post = async function(req, res) {
    console.log(req.body)
    let document = new student();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"student_type":"goat", "cost":12, "size":"large"}
    //s_NAME: String,
    //s_ID: Number,
    //s_GRADE: Number
    document.s_NAME = req.body.s_NAME;
    document.s_ID = req.body.s_ID;
    document.s_GRADE = req.body.s_GRADE;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // for a specific student.
exports.student_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await student.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };