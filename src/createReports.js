const fs = require('fs');
const path = require('path');
const pizzip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const exceljs = require('exceljs');
const res = require('express/lib/response');

const createReports = (data) => {
    
    const wordfile = data['word'];
    const excelfile = data['excel'];
    const datos = data['datos'];
    const json = {};
    datos.forEach(element => {
        
    });

    console.log(wordfile, excelfile, datos);
};

exports.createReports = createReports;