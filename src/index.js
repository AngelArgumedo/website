const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static('src'));
app.set('port', process.env.PORT || 3000)
// app.get('/', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
// });

app.listen(app.get('port'),() =>{
    console.log(`server on port ${app.get('port')}`);
});
