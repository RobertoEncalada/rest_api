var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Suppliers = require('../models').suppliers;

/* GET suppliers listing. */
router.get('/findAll', function(req, res, next) {
    Suppliers.findAll({})
    .then(data => {
        res.json(data)
    })
});

/* GET supplier by id. */
router.get('/findById/:id', function(req, res, next) {

    let id = parseInt(req.params.id);
  
    Suppliers.findOne({  
        where: { 
          [Op.and]: [
            {SupplierID: id}
          ]
        }
    })  
    .then(data => {  
        res.json(data);  
    })  
    .catch(error => res.status(400).send(error)) 
  });


/* POST supplier. */
router.post('/save', function(req, res, next) {  

    let {SupplierName, ContactName, Address, City, PostalCode, Country, Phone} = req.body;
        
    Suppliers.create({
        SupplierName: SupplierName,
        ContactName: ContactName,
        Address: Address,
        City: City,
        PostalCode: PostalCode,
        Country: Country,
        Phone: Phone
    })
    .then(data => {  
      res.json(data);  
  })  
  .catch(error => res.status(400).send(error)) 
});

/* PUT supplier. */
router.put('/update', function(req, res, next) {  

    let {SupplierID, SupplierName, ContactName, Address, City, PostalCode, Country, Phone} = req.body;
        
    Suppliers.update({
        SupplierID: SupplierID,
        SupplierName: SupplierName,
        ContactName: ContactName,
        Address: Address,
        City: City,
        PostalCode: PostalCode,
        Country: Country,
        Phone: Phone
    },
    {
        where: {
            SupplierID: parseInt(SupplierID)
        }
    })
    .then(data => {  
      res.json(data);  
  })  
  .catch(error => res.status(400).send(error)) 
});

/* DELETE supplier. */
router.delete('/delete/:id', function(req, res, next) {  

    let id = parseInt(req.params.id);
        
    Suppliers.destroy({
      where: { 
        SupplierID: id
      }
    })
    .then(data => {  
    res.json(data);  
})  
.catch(error => res.status(400).send(error)) 
});

module.exports = router;