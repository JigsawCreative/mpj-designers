// const { dest, src } = require("gulp");
// const GetGoogleFonts = require("get-google-fonts");
// //const regeneratorRuntime = require("regenerator-runtime");

// const fonts = async () => {
//   // Setup of the library instance by setting where we want
//   // the output to go. CSS is relative to output font directory
//   const instance = new GetGoogleFonts({
//     outputDir: "./public/build/fonts",
//     cssFile: "./fonts.css",
//   });

//   // Grabs fonts and CSS from google and puts in the dist folder
//   const result = await instance.download(
//     "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
//     //"https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,400;0,700;1,400&family=Red+Hat+Display:wght@400;900"
//   );

//   return result;
// };

// module.exports = fonts;

const { dest, src } = require("gulp");
const GetGoogleFonts = require("get-google-fonts");

const fonts = async () => {
  // Setup of the library instance by setting where we want
  // the output to go. CSS is relative to output font directory
  const instance = new GetGoogleFonts({
    outputDir: "./public/build/fonts",
    cssFile: "./fonts.css",
  });

  // Grabs fonts and CSS from google and puts in the dist folder
  const result = await instance.download(
    "https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900"
  );

  return result;
};

module.exports = fonts;
