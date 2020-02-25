const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

// const api = require('./server/api');

app.use('/api', (req, res)=>{

    const obj = [{id:'1', name:'rishan'}, {id:'2', name:'akshara'}]


    res.send(obj)
});


const port = process.env.PORT || '3001';
app.set('port', port);






const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));