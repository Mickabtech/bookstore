const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const bookrouter = require('./routes/book.routes.js')
const userRouter = require('./routes/user.routes.js')
const userLogin = require('./routes/login.routes.js')


app.use(cors());
app.use('/api/book', bookrouter)
app.use('/api/book/register', userRouter)
app.use('/api/book/login', userLogin)


const MONGODB_URI = 'mongodb+srv://mickabtech:Hesterio1@cluster0.f1jbufm.mongodb.net/';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:');
  });


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});