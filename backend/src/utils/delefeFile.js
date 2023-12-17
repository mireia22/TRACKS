const cloudinary = require("cloudinary").v2;

const deleteFile = (url) => {
  const imgSplitted = url.split("/");

  const folderName = imgSplitted.at(-2);
  const fileName = imgSplitted.at(-1)?.split(".")[0];

  //   cloudinary.uploader.destroy("folderName/fileName");
  cloudinary.uploader.destroy(`${folderName}/${fileName}`, () => {
    console.group("Photo Destroyed");
  });
};

module.exports = { deleteFile };
