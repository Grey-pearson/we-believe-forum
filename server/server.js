const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
// require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// app.use(require("./routes/record"));
// get driver connection
// const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });
    console.log(`Server is running on port: ${port}`);
});
// set up appolo server
// mern server p21 startappoloserver function
// import at

// needs schema or will break
// query hello world schema, just basic connection

/////////////////////////////////////////////
// basic resolver and typedefs
// week project 21 mini project