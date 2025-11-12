const express = require('express');
const app = express();

const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

app.set('view engine', 'ejs');

app.use('/users', userRouter);
app.use('/posts', postRouter); 

app.get('/', (req, res) => {
  console.log('Ish is cool!');
  res.render('index', { user: 'Ish' });
});

app.listen(3030, () => {
  console.log('Server running on port 3030');
});
