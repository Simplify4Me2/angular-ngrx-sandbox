var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(port);

console.log('RESTful API server started on: ' + port);

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/match", (req, res, next) => {
    res.json([
        { nr: 1, homeTeam: 'FC De Kampioenen', awayTeam: 'VK Heuvel Lo', homeScore: 3, awayScore: 1 },
        { nr: 2, homeTeam: 'RSC Anderlecht', awayTeam: 'STVV', homeScore: 2, awayScore: 2 },
        { nr: 3, homeTeam: 'Zulte Waregem', awayTeam: 'Cercle Brugge', homeScore: 4, awayScore: 0 },
        { nr: 4, homeTeam: 'RC Genk', awayTeam: 'OHL', homeScore: 0, awayScore: 1 }]);
});