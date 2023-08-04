const express = require("express");
const userRoute = require("./userRoutes"); //Load the route modules

const app = express();
const port = 3000;
app.use(express.json());

app.use((req, res, next) => {
    console.log("This middleware is encountered before every endpoint");
    next(); //The next method allows the function to serve the next part of the server call.
});

app.use("/user", userRoute); //name the root route for all fruit routes /fruits.

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});