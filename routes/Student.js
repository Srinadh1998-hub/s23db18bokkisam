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
/* GET students */
router.get('/', student_controlers.student_view_all_Page );
module.exports = router;

router.get('/detail', student_controlers.student_view_one_Page);

router.get('/create', student_controlers.student_create_Page);