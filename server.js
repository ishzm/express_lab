const express = require('express');

const userRouter = require('./routes/users');
//const postRouter = require('./routes/posts');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
//app.use(logger);
app.use('/users', userRouter);
//app.use('/posts', postRouter);


app.get('/', (req, res) => {
    console.log('Ish is cool!');
    res.render("index", {user: "Ish"});
});

app.get(`/new`, (req, res) => {
    res.send("users/new", {firstName: "Please Enter Your Name"});
});
app.listen(3030);