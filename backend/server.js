const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cron = require('node-cron');
const OpenAI = require('openai');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/adsforcharity')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Content Schema
const contentSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const Content = mongoose.model('Content', contentSchema);

// Generate content using ChatGPT
async function generateDailyContent() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful content creator that generates interesting and engaging articles."
        },
        {
          role: "user",
          content: "Generate an interesting article about a random topic. Include a title and content. Keep it engaging and informative."
        }
      ],
    });

    const response = completion.choices[0].message.content;
    const [title, ...contentArr] = response.split('\n\n');

    const newContent = new Content({
      title: title.replace('Title: ', ''),
      content: contentArr.join('\n\n')
    });

    await newContent.save();
    console.log('New content generated and saved');
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

// Schedule daily content generation (runs at 00:00 every day)
cron.schedule('0 0 * * *', generateDailyContent);

// API Routes
app.get('/api/content/latest', async (req, res) => {
  try {
    const content = await Content.findOne().sort({ createdAt: -1 });
    res.json(content);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching content' });
  }
});

app.get('/api/content/all', async (req, res) => {
  try {
    const contents = await Content.find().sort({ createdAt: -1 });
    res.json(contents);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching content' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 