const express = require('express'),
    router = express.Router();

router.get('/:name?/:year?/:place?', (req, res) => {
    console.log("url parameters are: ", req.params);

    const { name, year, place } = req.params;
    
    res
        .status(200)
        .send(`<h1>"Hello, ${name}!"</h1><h2>You are ${2020 - year}</h2><h3>"You were born in ${place}"`)
        .end();
});
module.exports = router;