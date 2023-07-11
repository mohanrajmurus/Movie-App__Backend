const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv').config();
const {CLOUD__NAME,CLOUD__API__KEY,CLOUD__API__SECRET} = process.env

cloudinary.config({
    cloud_name:CLOUD__NAME,
    api_key:CLOUD__API__KEY,
    api_secret:CLOUD__API__SECRET
})

module.exports = cloudinary;