const express = require('express');
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser');
const report = require('./createReports');

const app = express();

const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload())

app.get('/', (req,res) => {
    res.json({
        message: 'Hello World with get'
    })
});

app.post('/', (req,res) => {

    var data = req.body.data;
    var wordfile = req.files.word
    var excelfile = req.files.excel
    console.log(data);
    wordfile.mv(`${__dirname}/files/${wordfile.name}`, (err) => {
        if(err){
            console.log(err);
            res.status(500).json({
                message: 'Error al guardar el archivo word'
            })
        }else{
            excelfile.mv(`${__dirname}/files/${excelfile.name}`, (err) => {
                if(err){
                    console.log(err);
                    res.status(500).json({
                        message: 'Error al guardar el archivo excel'
                    })
                }else{
                    res.status(200).json({
                        message: 'Archivos guardados'
                    })
                }
            })
        }
    })
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});