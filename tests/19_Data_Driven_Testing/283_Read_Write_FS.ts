import fs from 'fs';
import path from 'path';

// Always build paths from __dirname. A bare './280_Users.json' resolves
// against the working directory, so it breaks when run from elsewhere.
const filePath = path.join(__dirname, '280_Users.json');
console.log('File path:', filePath);

const fileData = fs.readFileSync(filePath, 'utf-8');
const userDataJSObject = JSON.parse(fileData);
console.log(userDataJSObject);

console.log(userDataJSObject.username);
console.log(userDataJSObject.password);

// Writing Data to a JSON File

const user = {
    name: "Santosh",
    role: "QA Tester"
};

const jsonData = JSON.stringify(user);

// fs.writeFileSync("./output.json", jsonData);
fs.writeFileSync(path.join(__dirname, 'output.json'), jsonData);
console.log("JSON file created successfully");

//To run this file, use the following command in the terminal
//npx tsx 283_Read_Write_FS.ts