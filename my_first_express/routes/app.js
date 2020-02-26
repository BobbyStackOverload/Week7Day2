const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log("Server running on port 3333")
});

const rootController = require('./routes/index'), 
catController = require('./routes/cat'),
dogController = require('./routes/dog'),
fooController = require('./routes/foo');

app.use('/', rootController);
app.use('/foo', fooController);
app.use('/cat', catController);
app.use('/dog', dogController);

//route
// app.get('/', (request, response) => {
//         const snippet = `<h1>Happy Birthday Alan and (belated) Josh!</h1>`;
//     response
//         .status(200)
//         .send(snippet)
//         .end();
// });