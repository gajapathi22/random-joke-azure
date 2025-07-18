const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the developer go broke? Because he used up all his cache!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
  "What do you call a fish wearing a bowtie? Sofishticated.",
  "Why don't eggs tell jokes? They'd crack each other up.",
  "How do you organize a space party? You planet.",
  "What do you call a fake noodle? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!"// ...add more jokes
];

app.get('/api/joke', (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json({ joke: jokes[randomIndex] });
});

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
