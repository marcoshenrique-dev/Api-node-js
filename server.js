

        // Aulas juntas na api  (usando node.js)


        // -> express vai ajudar no uso de rotas e views

const cors = require("cors");

const express = require("express");

const mongoose = require("mongoose");

const requireDir = require("require-dir");



const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect(
        
        'Sua connection String :)',
        
        { useNewUrlParser : true , useUnifiedTopology : true}


        
               
        );

        requireDir('./src/models');

      //  const Product = mongoose.model('Product');


app.use('/api' , require("./src/routes"));

app.listen(3001);
