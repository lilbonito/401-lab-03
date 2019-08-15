'use strict';

const EditFile = require('../../edit-file');
const instanceOfEdit = new EditFile();
const faker = require('faker');
let fng = `${__dirname}/person.json`;
let data = null;

instanceOfEdit.readJson(fng,(jsonFileContents) => {
        data = jsonFileContents;

        data.kids++;
        instanceOfEdit.writeJson(fng, data, console.log)
    console.log(data);
});


// .then(fileString)