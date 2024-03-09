const fs = require("fs");
const path = require("path");

function renameImages(folderPath) {
  // Read the contents of the folder
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return;
    }

    // Filter out non-image files
    const imageFiles = files.filter((file) => {
      const extension = path.extname(file).toLowerCase();
      return (
        extension === ".jpg" ||
        extension === ".jpeg" ||
        extension === ".png" ||
        extension === ".gif" ||
        extension === ".bmp"
      );
    });

    // Loop through image files and rename them
    imageFiles.forEach((oldName, index) => {
      const newName = `img-${index + 1}${path.extname(oldName)}`;
      const oldPath = path.join(folderPath, oldName);
      const newPath = path.join(folderPath, newName);

      // Rename the file
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming ${oldName}:`, err);
        } else {
          console.log(`Renamed ${oldName} to ${newName}`);
        }
      });
    });
  });
}

const folderPath = "Arvon-Images"; // Change this to the path of your folder
renameImages(folderPath);
