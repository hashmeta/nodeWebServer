const express = require('express')
var app= express();
app.get('/',(req,res)=>{
    res.send({
        name:'Kalpesh',
        likes:[
            'Biking',
            'Cities'
        ]
    })
});
app.use(express.static(__dirname +'/public'))
app.listen(3000);