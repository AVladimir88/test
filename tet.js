// const http = require("http");


// const host = '0.0.0.0';
// const port = 8000;

// const requestListener = function (req, res) {
//     res.writeHead(200);
//     res.end("My first server! I mean it!");
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });

const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public'))


app.get('/:name', (req, res) => {
    res.send(`Hello, ${req.params.name} World!`);

})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

