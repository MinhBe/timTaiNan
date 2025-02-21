const e = require('express');
const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },desc: {
        type: String,
        required: true,
        min: 6,
    },rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },lat: {
        type: Number,
        required: true,
    },long: {
        type: Number,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model('Pin', PinSchema);