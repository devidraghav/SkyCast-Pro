require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/weather/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`
    );

    res.json(response.data);

  } catch (error) {
    res.status(404).json({
      success: false,
      message: "City not found"
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server Running On Port ${process.env.PORT}`);
});