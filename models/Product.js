const { Schema, model, models, default: mongoose } = require("mongoose");

const ProductSchema = new Schema({
    title: {type: String, requiered: true},
    description: String,
    price: {type: Number, requiered: true},
    images: [{type: String}],
    category: {type: mongoose.Types.ObjectId, ref:'Category'},
    properties: {type:Object}
});

export const Product = models.Product || model('Product', ProductSchema);
