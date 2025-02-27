// models/productModel.js
import { Schema, model } from "mongoose";

// const ProductSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     basePrice: {
//         type: Number,
//         required: true,
//     },
//     comparePrice: {
//         type: Number,
//         required: true,
//     },
//     costPerItem: {
//         type: Number,
//         required: true,
//     },
//     category: {
//         type: String,
//         required: true,
//     },
//     productTaxable:{
//         type:Boolean
//     },
//     brand:{
//         type:String,
//     },
//     category:{
//         type:String,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

const ProductSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    SKU: {
        type: String,
        required: true,
        unique: true
    },
    tags: {
        type: [String],
        default: []
    },
    images: {
        type: [String],
        default: []
    },
    pricing: {
        basePrice: {
            type: Number,
            required: true
        },
        compareAtPrice: {
            type: Number,
            default: null
        },
        costPerItem: {
            type: Number,
            default: null
        }
    },
    variants: {
        type: [{
            variantName: { type: String },
            additionalOptions: [ String ]
        }],
        default: []
    },
    seo: {
        pageTitle: {
            type: String,
            default: ''
        },
        metaDescription: {
            type: String,
            default: ''
        },
        urlSlug: {
            type: String,
            default: ''
        }
    },
    taxable: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

const Product = model("Product", ProductSchema);

export default Product;