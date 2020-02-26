const express = require('express'),
    router = express.Router();

// const rootController = (req, res) => {
//     const snippet = `<h1>Hello World!</h1>`;
//     res 
//     .status(200)
//     .send(snippet)
//     .end();
// };

router.get('/',(req, res) => {
    const snippet = `<h1>Hello World!</h1>`;
    res
    .status(200)
    .send(snippet)
    .end();
});

module.exports = router;
