const path = require('path');
const express = require('express');

const app = express();
// git project path to run in static server
app.use(express.static(path.join(__dirname,'public')))

const PORT = 3000 || process.env.PORT;
app.listen(PORT,() => console.log(`server is running in port ${PORT}`))