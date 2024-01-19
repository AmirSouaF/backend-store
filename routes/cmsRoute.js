const express = require('express');
const router = express.Router();

const {
  getAllCMSs,
  postCMS,
  deleteSingleCMS,
  getSingleCMS,
  updateSingleCMS,
  deleteAllCMSs
} = require('../controllers/CMSCrud');


//http://localhost:3000/api/v1/CMSs
//http://localhost:3000/api/v1/CMSs/:id


// CMS routes
router.route('/CMSs')
  .get(getAllCMSs)
  .post(postCMS)
  .delete(deleteAllCMSs);

router.route('/CMSs/:id')
  .get(getSingleCMS)
  .put(updateSingleCMS)
  .delete(deleteSingleCMS);


module.exports = router;
