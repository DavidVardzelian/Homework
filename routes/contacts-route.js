const express = require('express')
const router = express.Router();
// Controllers
const {createContact, getUsers, editUserPage, editUser, deleteUser, addUsers}= require('../controllers/contact-controllers')

express.static('public')


router.get('/', getUsers)

router.get('/new',addUsers)
router.post('/new', createContact)

router.delete('/:id',deleteUser)

router.get('/edit/:id',editUserPage)

router.put('/edit/:id', editUser)

module.exports = router