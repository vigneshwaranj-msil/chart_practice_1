const path = require("path");

let srcDirPath = path.resolve(path.join(__dirname, "src"));
/*
win: C:\Users\Desktop\test
mac/linx: ./users/Desktop/test
*/

/*
Flavours:
1.Production - is for the live users (Folder name:"dist")
2.Development - is for testing purpose (Folder name:"dev")
3.Testing - is for seperate testing (Folder name:"test")
*/

module.exports ={
 entry: path.resolve(srcDirPath, "main.js"),
 output:{
   path:path.resolve(__dirname, (
	isProduction ? 
		"dist" : 
		(isForTesting ? 
			"test" :
			"dev")
	)
  ),
  fileName:"app.bundle.js"
 },
 resolve:{
  aliases: {
    calc:path.resolve(srcDirPath, "js/vinayaApp")
  }
 }
};
