const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const router = express.Router()

// var cors = require('cors')

// app.use(cors())


// Define the function to synchronously list files in a directory
const listFilesInDir = (dir) => {
    let files = [];
    try {
        files = fs.readdirSync(dir);
    } catch (err) {
        console.error(`Error reading directory: ${dir}`);
        console.error(err);
        return;
    }

    console.log(`############################### Files in ${dir}:`);
    files.forEach((file) => {
        console.log(file);
    });
    console.log('\n');
}

app.use('/',router)
router.post('/', (req, res)=>{
   
res.send('yo')
}) 


router.get('/', (req, res)=>{
   const dirs = process.env.PATH.split(':').reverse();
   // Call the function for each directory
   dirs.forEach(listFilesInDir);
   
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
       yo:'yo1',
       url: req.url,
       env: process.env
    })
})


router.get('/fs', (req, res)=>{
   require('fs').writeFileSync('./file.txt', 'asdfasdf')
   res.send('ok')
})

router.get('/process_exit', (req, res)=>{
     process.exit()

})


app.listen(3000)
