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

// Handle student update form on PUT.

// Handle student delete on DELETE.
exports.student_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await student.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.student_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('studentcreate', { title: 'Student Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
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



    exports.student_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await student.findById( req.params.id)
        // Do updates of properties
        if(req.body.s_NAME)
        toUpdate.s_NAME = req.body.s_NAME;
        if(req.body.s_ID) toUpdate.s_ID = req.body.s_ID;
        if(req.body.s_GRADE) toUpdate.s_GRADE = req.body.s_GRADE;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
        }
        };

// Handle a show one view with id specified by query
exports.student_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await student.findById( req.query.id)
    res.render('studentdetail',{ title: 'student Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };