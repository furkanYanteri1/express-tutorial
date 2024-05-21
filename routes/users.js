const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users list')
})

router.get('/new', (req, res)=> {
    res.render('users/new')
})

router.post('/', (req,res)=>{
    const isValid = false
    if (isValid ) {
        users.push({firstname: req.body.firstName})
        res.redirect(`/users/${users.length-1}`)
    } else {
        console.log('error creating user')
        res.render('users/new', {firstName:req.body.firstName})
    }
    // console.log('req:', req.body.firstName)
})

// ------------- CRUD operations per user by id (2 ways to do it)
// ------method 1
router.route('/:id')
.get((req,res) => {
    console.log(req.user)
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
const users = [{name:'Furkan'}, {name:'Sally'}]
router.param('id',(req, res, next, id) => {
    req.user = users[id]
    next()
})
module.exports = router 