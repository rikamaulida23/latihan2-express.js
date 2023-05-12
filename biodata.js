require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


console.log("HOST:"+process.env.DB_HOST);
console.log("USER:"+process.env.DB_USER);
console.log("PASS:"+process.env.DB_PASS);
console.log("NAME:"+process.env.DB_NAME);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/biodata', function (req, res) {
    const nama = req.query.nama;
    const tempat = req.query.tempat;
    const tanggal= req.query.tanggal;
    const alamat = req.query.alamat;

    res.send({
        'Nama': nama,
        'Tempat-Lahir': tempat,
        'Tanggal-Lahir': tanggal,
        'Alamat' : alamat
    });
});


app.post('/biodata', function (req, res) {
    const nama = req.body.nama;
    const tempat = req.body.tempat;
    const tanggal= req.body.tanggal;
    const alamat = req.body.alamat;

    res.send({
        'Nama': nama,
        'Tempat-Lahir': tempat,
        'Tanggal-Lahir': tanggal,
        'Alamat' : alamat
    });
});

app.listen(port)
console.log('Server started at http://localhost:' + port);

//web = http://localhost:8080/biodata?nama=Rika%20Maulida6&tempat=Bogor&tanggal=23%20Juni%202000&alamat=Jalan%20Cifor
//postman = http://localhost:8080/biodata
