const express = require('express')
const multer = require('multer');
const imgSchema = require('../Schemas/image.model')
var fs = require('fs')
var path = require('path')


const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage }).single('imgSrc')




module.exports = upload;