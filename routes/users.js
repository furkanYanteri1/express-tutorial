const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users list')
})

router.get('/new', (req, res)=> {
    res.send('User New Form')
})

router.post('/', (req,res)=>{
    res.send('Create User')
})

// ------------- CRUD operations per user by id (2 ways to do it)
// ------method 1
router.route('/:id')
.get((req,res) => {
    res.send(`User Get by id: ${req.params.id}`)
})
.put((req,res) => {
    res.send(`Update user by id: ${req.params.id}`)
})
.delete((req,res) => {
    res.send(`Delete User by id: ${req.params.id}`)
})
// ------method 1

// // ---method 2 --- decomment
// router.get('/:id', (req,res) => {
//     res.send(`User Get by id: ${req.params.id}`)
// })
// router.put('/:id', (req,res) => {
//     res.send(`Update user by id: ${req.params.id}`)
// })
// router.delete('/:id', (req,res) => {
//     res.send(`Delete User by id: ${req.params.id}`)
// })
// // ---method 2 --- decomment
// ------------- CRUD operations per user by id (2 ways to do it)

module.exports = router 