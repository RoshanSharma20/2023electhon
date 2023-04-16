const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const voterRouter = require('./routers/voterRouter');

app.listen(5000);

app.use(cookieParser());

app.use(express.json());
app.use('/user', voterRouter);
app.use((req, res) => {
    res.json({
        message: "end statment"
    })
    // res.render('views/404.html');
});