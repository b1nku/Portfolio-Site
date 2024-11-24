const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const io = socketIo(server, {
    cors: {
        origin: "*",
    },
});
app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

const weatherSchema = new mongoose.Schema({
    city: String,
    temperature: Number,
    description: String,
    humidity: Number,
    timestamp: { type: Date, default: Date.now },
});

const Weather = mongoose.model("Weather", weatherSchema);

app.post("/api/weather", async (req, res) => {
    const { latitude, longitude } = req.body;

    if (!latitude || !longitude) {
        return res.status(400).json({ error: "Latitude and Longitude are required" });
    }

    const API_KEY = process.env.VITE_OPEN_WEATHER_API;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const { name: city, main, weather } = response.data;

        const weatherData = {
            city,
            temperature: main.temp,
            description: weather[0].description,
            humidity: main.humidity,
        };

        const newWeather = new Weather(weatherData);
        await newWeather.save();

        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: "Error fetching weather data" });
    }
});

app.get("/api/weather", async (req, res) => {
    try {
        const latestWeather = await Weather.findOne().sort({ timestamp: -1 }); // Get the most recent weather entry
        if (!latestWeather) {
            return res.status(404).json({ error: "No weather data found" });
        }
        res.json(latestWeather);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving weather data" });
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => console.log('User disconnected'));
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
