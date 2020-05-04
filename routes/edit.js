const express = require('express');
const router = express.Router();
const editController=require('../controllers/edit')


router.get('/agentSupplier/edit/:id',editController.editAgentSupplier);
router.get('/clinicalEngineer/edit/:id',editController.editClinicalEngineer);

module.exports=router;