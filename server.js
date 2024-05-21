const express = require('express')
const app = express()
app.set('view engine', 'ejs')

// middleware -> go to the definition
app.use(logger)
app.use(logger2)

app.get('/', (req, res) => {
    console.log('here')
    // res.status(500).json({ message: 'error'})
    // res.download('server.js')
    // res.json({ message: 'error'})
    res.render('index', {text:'test-text '})
})

//  Seperate a route and connect it to our main app
const userRouter = require('./routes/users')
app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}
function logger2(req, res, next) {
    console.log('again')
    next()
}
app.listen(3000)