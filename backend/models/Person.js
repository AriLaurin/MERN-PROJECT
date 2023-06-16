const mongoose = require('mongoose');

const PersonModel = new mongoose.Schema({
    fornavn: {
      type: String,
      required: true
    },
    etternavn: {
      type: String,
      required: true
    },
    perNr: {
        type: Number,
        required: true
      },
      adresse: {
        type: String,
        required: true
      }
  }, {timestamps: true});
  
  const Person = mongoose.model('Person', PersonModel);


module.exports = Person;