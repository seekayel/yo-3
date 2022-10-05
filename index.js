const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()




app.use('/',router)
router.post('/', (req, res)=>{
   
res.send('yo')
})

router.get('/process_exit', (req, res)=>{
     process.exit()

})

router.get('/', (req, res)=>{
    console.log('asdfasdfasf')
    console.log(Date.now())
    console.log(req.query)
    console.log(req.headers)
    return res.json({yo:'yo'})
})

app.listen(3000)
