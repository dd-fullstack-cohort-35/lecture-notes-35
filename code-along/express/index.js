const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

// Add your code here.

app.listen(4200, () => {console.log("Express has Started")})