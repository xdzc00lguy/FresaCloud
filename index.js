const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"dashboard")));
app.use(express.urlencoded({ encoded: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname,"dashboard","index.html"));
});

app.get("/home", (req, res) => {
	res.sendFile(path.join(__dirname,"dashboard","home.html"));
});

app.listen(process.env.PORT || 3000, () => {
	return console.log(`\x1b[1;32m[✓]\x1b[0m\tServer iniciado \x1b[1;4mhttp://127.0.0.1:${process.env.PORT || 3000}\x1b[0m`);
});
