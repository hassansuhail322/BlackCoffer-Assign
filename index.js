const express = require('express');
const connectToMongo = require('./db');
const dataModel = require("./dataModel");
const givenData = require('./jsondata.json')



connectToMongo();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


givenData.forEach(element => {

    dataModel.exists(element, function (err, doc) {
        if (err){
           console.log(err)
        }else{
            if(doc == null ) {
                dataModel.create(element);
            }
        }
     });
});





app.get('/', async(req, res) => {

    const dataFromDatabase = await dataModel.find();
    res.json(note);
    console.log("ha")
    res.send('Hello, Woorld!');
  });




app.listen(port,() =>{
    console.log(`The app is running at port ${port}`);
})