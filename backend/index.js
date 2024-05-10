const express = require('express');
const mongoose = require('mongoose');

const Book  = require('./models/bookModel.js')





const app = express();



//Creating Routes

app.post('/api/book', async (req, res)=>{

  try {

      if (!req.body.title || !req.body.author || !req.body.publishedYear){

          return res.status(400).json({
            message: "Please fill in the title, author and published year"
          })
      
      }

        const book = await Book.create(req.body) 
        res.status(200).json(book)

    
    
  } catch (error) {

    res.status(500).json({message: error.message})
    console.log(error)
    
  }

})



const MONGODB_URI = 'your-mongodb-connection-string';
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});