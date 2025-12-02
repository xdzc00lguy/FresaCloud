const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"..","dashboard")));
app.use(express.urlencoded({ encoded: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname,"..","dashboard","index.html"));
});

module.exports = { app };
