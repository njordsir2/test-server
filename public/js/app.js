console.log("Client side javascript file has been loaded!")

// This code is expected to be run in the client's browser and has 'non-node' javascript that should be compatible with the client's browser

const searchForm = document.querySelector("form")
const searchInput = document.querySelector("input")

searchForm.addEventListener("submit", (e) => {
    e.preventDefault() // prevent the default behaviour that refreshes the page on each submit

    /*
    console.log("Calling an API using client side scripting and printing reponse..")
    fetch("http://puzzle.mead.io/puzzle").then((response) => {
        response.json().then((data) => {
            console.log(data)
        })
    })*/

    const inputValue = searchInput.value
    console.log("User provided input: " + inputValue)
    fetch("http://localhost:3000/products?search=" + inputValue).then((response) => {
        response.json().then((data) => {
            console.log(data)
        })
    })
})