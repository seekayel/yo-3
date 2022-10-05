const path = require('path')
const express = require('express')
const app = express()
const router = express.Router()




app.use('/',router)
router.post('/', (req, res)=>{
   
res.send('yo')
})

router.get('/', (req, res)=>{
    console.log('asdfasdfasf')
    console.log(Date.now())
    console.log(req.query)
    console.log(req.headers)
     process.exit()
    return res.json({yo:'yo'})
})

app.listen(3000)
