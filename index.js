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

router.get('*', (req, res)=>{
   console.log(req.url)
    console.log('asdfasdfasf')
    console.log(Date.now())
    console.log(req.query)
       console.log(req.headers)
   
      res.setHeader('WWW-Authenticate','Basic')
      res.setHeader('Access-Control-Allow-Origin','*')
      res.setHeader('Access-Control-Allow-Methods','*')
      res.setHeader('Access-Control-Allow-Headers','*')
      res.setHeader('Access-Control-Allow-Credentials',true)
   
    return res.json({
       yo:'yo',
       url: req.url
    })
})

app.listen(3000)
