const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  
  methods: ['GET', 'POST'],         
  allowedHeaders: ['Content-Type']  
}));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({ content: String });
const Note = mongoose.model('Note', noteSchema);

app.get('/api/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

app.post('/api/notes', async (req, res) => {
  const note = new Note({ content: req.body.content });
  await note.save();
  res.json(note);
});

app.listen(5000, () => console.log('Backend läuft auf Port 5000'));
