const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()


const port = process.env.PORT
const hostname = process.env.HOST_NAME


//khai bao router
app.get('/', (req, res) => {
    res.send('Hello World!')
})

/////////////////////// config template engine
app.set('views', './src/views/')
app.set('view engine', 'ejs')
//////////////////////

///////config static file
app.use(express.static(path.join(__dirname, './src/public')))
///////////

app.get('/res', (req, res) => {
    //res.send('Hoi sinh')
    res.render('sample.ejs')
})
app.get('/tintuc', (req, res) => {
    res.render('tintuc.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})