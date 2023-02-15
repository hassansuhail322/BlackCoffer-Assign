const mongoose = require("mongoose");

const { Schema } = mongoose;


// creating schema for user
const dataSchema = new Schema(
    {
        end_year: String,
        intensity: Number,
        sector: String,
        topic: String,
        insight: String,
        url: String,
        region: String,
        start_year: String,
        impact: String,
        added: Date,
        published: Date,
        country: String,
        relevance: Number,
        pestle: String,
        source: String,
        title: String,
        likelihood: Number
      }
      
);

const data = mongoose.model("Data", dataSchema);
module.exports = data;
