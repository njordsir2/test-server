const express = require("express")
const path = require("path")

const app = express()

const port = process.env.PORT || 3000

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
        products: [{
            productName: req.query.search
        }]
    })
})

app.listen(port, () => {
    console.log("The server is up and running on port: " + port)
})