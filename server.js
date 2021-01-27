//Dependencies Express
const express = require("express");

//Set up the express app
const app = express();

//Create PORT
const PORT = process.env.PORT || 8080

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listen PORT
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})
