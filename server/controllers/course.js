const Course = require('../models/course.js');

var fs = require('fs');

const { s3 } = require('../config/aws');

const upload = async function (req, res, next) {
  const originalname = req.file.originalname;

  try {
    const getParams = {
      Bucket: 'hybrid-lms',
      Key: originalname
    };

    s3.getObject(getParams, function (err, data) {
      if (err) throw err;

      var fileContents = Buffer.from(data.Body, "base64");
      var savedFilePath = '/temp/' + originalname; // in some convenient temporary file folder

      fs.writeFile(savedFilePath, fileContents, function () {
        try {
          res.status(200).download(savedFilePath, originalname);

        } catch (error) {
          console.log("error", error);
        }
      });
    });

  } catch (err) {
    next(err);
  }
};

const getCourses = async function (req, res, next) {
  try {
    const course = new Course();
    const data = await course.getCourses()
    return data
  } catch (err) {
    console.log("error..........", err);
    throw err;
  }
};

module.exports = { upload: upload, getCourses: getCourses };