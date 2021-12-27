const express = require("express")
const path = require("path")

const app = express()
app.set("view engine", "hbs")
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    //res.send("<h1>Hello express!</h1>")
    res.render("index", {
        title: "Simple App",
        name: "Vishi"
    })
})

// sending json response
app.get("/help", (req, res) => {
    res.send([{
        name:"Vishi",
        profession:"Bounty hunter"
    }])
})

app.get("/products", (req, res) => {
    console.log(req.query)
    if(!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        })
    }
    res.send({
        products: []
    })
})

app.listen(3000, () => {
    console.log("The server is up and running!")
})