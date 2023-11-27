/*var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('Student', { title: 'Search Results Student' });
});
 */

var express = require('express');
const student_controlers= require('../controllers/student');
var router = express.Router();


// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }


/* GET students */
router.get('/', student_controlers.student_view_all_Page );
module.exports = router;

router.get('/detail',secured, student_controlers.student_view_one_Page);

router.get('/create',secured, student_controlers.student_create_Page);

router.get('/update',secured, student_controlers.student_update_Page);

router.get('/delete',secured, student_controlers.student_delete_Page);
