const mongoose = require('mongoose')

const candyschema = mongoose.Schema(
    {
        id: {type: String, required:true},
        name: {type: String, required:true}
    }
)

module.exports = mongoose.model('Candy', candyschema)