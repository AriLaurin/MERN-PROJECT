const Person = require("../models/Person");
const mongoose = require("mongoose");

module.exports.home_get = async (req,res) => { 
    try{
        const person = await Person.find({});
        res.status(200).json(person)
        console.log(person);
    }catch(err){
        console.log(err);
    }
  }

  module.exports.person_get = async (req,res) => { 
    const {id} = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Den brukeren finnes ikke"})
        }

    const person = await Person.findById(id)
    res.status(200).json(person)
    }catch(err){
        console.log(err);
    }
  }

  module.exports.home_post = async (req,res) => { 
    const {fornavn, etternavn, perNr, adresse} = req.body
    try{
        const person = await Person.create({fornavn, etternavn, perNr, adresse})
        res.status(200).json(person)
        console.log(person);
    }catch(err){
        res.status(400).json({error: err.message})
    }
  }

  module.exports.person_delete = async (req,res) => { 
    const {id} = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Den brukeren finnes ikke"})
        }

        const person = await Person.findOneAndDelete({_id: id})

        if(!person){
            return res.status(404).json({error: "Den brukeren finnes ikke"})
        }
    }catch(err){
        console.log(err);
    }
  }

  module.exports.person_update = async (req,res) => { 
    const {id} = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "Den brukeren finnes ikke"})
        }

        const person = await Person.findOneAndUpdate({_id: id},{
            //spread the properties of the req.body into the new object that this is inside
            ...req.body
        })
        res.status(200).json(person)

        if(!person){
            return res.status(404).json({error: "Den brukeren finnes ikke"})
        }
    }catch(err){
        console.log(err);
    }
  }