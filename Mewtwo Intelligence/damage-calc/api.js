const express = require("express");
const calc = require("@smogon/calc");
const http = require("http");

const app = express();
app.use(express.json());

const gens = calc.Generations;

app.post("/calc", (req, res) => {
    const { gen, attacker, defender, move } = req.body;

    try {
        const generation = gens.get(gen);
        const result = calc.calculate(
            generation,
            new calc.Pokemon(generation, attacker.name, attacker.options),
            new calc.Pokemon(generation, defender.name, defender.options),
            new calc.Move(generation, move.name)
        );

        res.json({
            min: result.damage[0],
            max: result.damage[result.damage.length - 1],
            desc: result.desc()
        });
    } catch (error) {
        res.status(500).json({
            min: 0,
            max: 0,
            desc: "No damage (special move or error)",
            error: error.message
        });
    }
});

const server = http.createServer(app);
server.keepAliveTimeout = 15000;  // 15s
server.headersTimeout = 16000;

server.listen(3001, () => {
    console.log("API Damage Calc running on port 3001!");
});
