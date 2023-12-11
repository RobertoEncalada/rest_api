var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Users = require('../models').users;


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

/* GET user by id. */
router.get('/findById/:id/json', function(req, res, next) {  

  let id = parseInt(req.params.id);

  Users.findOne({  
      where: { 
        [Op.and]: [
          {id: id}
        ]
      }
  })  
  .then(users => {  
      res.json(users);  
  })  
  .catch(error => res.status(400).send(error)) 
});

/* GET users listing. */
router.get('/findAll/json', function(req, res, next) {
  Users.findAll({  
  })  
  .then(users => {  
      res.json(users);  
  })  
  .catch(error => res.status(400).send(error)) 
});

/* POST user. */
router.post('/save', function(req, res, next) {  

  let {email, username, password} = req.body;
      
  Users.create({
    email: email,
    username: username,
    password: password,
    logins: 0,
    last_login: 0
  })
  .then(users => {  
    res.json(users);  
})  
.catch(error => res.status(400).send(error)) 
});
/* PUT user. */
router.put('/update', function(req, res, next) {  

  let {id, email, username, password} = req.body;
      
  Users.update({
    email: email,
    username: username,
    password: password,
    logins: 0,
    last_login: 0
  },
  {
      where: {
        id: parseInt(id)
      }
  })
  .then(users => {  
    res.json(users);  
})  
.catch(error => res.status(400).send(error)) 
});
/* DELETE user. */
router.delete('/delete/:id', function(req, res, next) {  

  let id = parseInt(req.params.id);
      
  Users.destroy({
    where: { 
      id: id
    }
  })
  .then(users => {  
  res.json(users);  
})  
.catch(error => res.status(400).send(error)) 
});
module.exports = router;
