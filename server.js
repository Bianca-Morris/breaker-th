const express = require('express');
const app = express();

const request = require('request');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

app.get('/episode', (req, res) => {
    let options = {
        url: 'https://api.breaker.audio/shows/185226/episodes/29314799',
        headers: {
            'User-Agent': 'Breaker/1.0.0 (0)'
        }
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body));
        } else {
            res.json(err);
        }
    });
})

app.patch('/episode', (req, res) => {
    let options = {
        url: 'https://api.breaker.audio/shows/185226/episodes/29314799',
        headers: {
            'User-Agent': 'Breaker/1.0.0 (0)'
        },
        method: 'PATCH'
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log('RESPONSE: ' + JSON.stringify(info));
            res.json(info);
        } else {
            res.json(err);
        }
    })
})


app.listen(8080, () => console.log('Example app listening on port 8000!'));
