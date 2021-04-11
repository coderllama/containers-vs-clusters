
const app = require('express')();

app.get('/', async (req, res) => {
    res.send('hello')    
} )

app.listen(3000, console.log(`${ process.pid } on PORT 3000 `)  )