'use strict';

const fs = require('fs');
const fsx = require('fs-extra');
const faker = require('faker');

class EditFile {
    readJson(fileName, callback) {
        fs.readFile(fileName, (error, jsonFileContents) => {
            if (error) {
                throw error; //then if error throw error. Thanks Josh.
            } else {
                let  data = JSON.parse(jsonFileContents.toString());
                callback(data);
            }
        });
    }

    writeJson(fileName, jsonFileContents, callback) {
        let str = JSON.stringify(jsonFileContents);
        fs.writeFile(fileName, str, callback);
    }
}

module.exports = EditFile;