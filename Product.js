const mongoose = require ('mongoose'); //inicializando meu banco de dados

const mongoosePaginate =  require('mongoose-paginate');

const ProductSchema = new mongoose.Schema ({ //criando um produto

    title : {

    type : String,

    required : true,

    },

    description: {

        type : String,

        required : true,

    },

    url : {

            type : String,

            required : true,

    },

    createdAt : {

        type : Date,

        default : Date.now,
    }



});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema); //criando uma tabela chamada produto 