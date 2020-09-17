const mongoose = require('mongoose');


const polygonSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Polygon'],
      required: true
    },
    coordinates: {
      type: [[[Number]]], // Array of arrays of arrays of numbers
      required: true
    }
  });

const propertiesSchema = new mongoose.Schema({
    plz: String, 
    note: String,
    qkm: Number, 
    einwohner: Number
});

const featureSchema = new mongoose.Schema({
  type: {
      type: String,
      enum: ['Feature'],
      required: true
    },
  geometry: polygonSchema, 
  properties: propertiesSchema,
});

const Feature = mongoose.model('zip_polygone', featureSchema, 'zip_polygones');

module.exports = Feature;