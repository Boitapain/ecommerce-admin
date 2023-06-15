const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema({
    title: {type: String, requiered: true},
    description: String,
    price: {type: Number, requiered: true}
});

export const Product = models.Product || model('Product', ProductSchema);
