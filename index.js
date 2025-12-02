const { app } = require("./engine/engine");

app.listen(3000, () => {
	return console.log(`\x1b[1;32m[✓]\x1b[0m\tServer rodando: \x1b[1;4mhttp://0.0.0.0:${process.env.PORT || 3000}\x1b[0m`);
});
