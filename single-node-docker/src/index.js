const app = require("express")()

app.get("/", async (req, res) => {
    res.send("Hello World")
})

app.listen( 3000, console.log('listening on port 3000') )