const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

exports.uploadPDFToCloudinary = async (buffer) => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
        if (error) {
          reject(error);
        } else {
            
          resolve(result.secure_url);
        }
      }).end(buffer);
    });
  };