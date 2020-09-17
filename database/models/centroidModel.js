const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

const propertiesSchema = new mongoose.Schema({
    plz: String, 
    note: String,
    qkm: Number, 
    einwohner: Number
});

const centroidSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Feature'],
        required: true
      },
    geometry: pointSchema,
    properties: propertiesSchema
    });

const Centroid = mongoose.model('zip_centroid', centroidSchema, 'zip_centroids');

module.exports = Centroid;