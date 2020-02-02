const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise')
const PORT = process.env.PORT || 5746;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var mongojs = require('mongojs');
var collection = "item_info";
var local_db_arr;
//mongodb application
var db = mongojs("mongodb://yoda:ellehacks2020@ds363118.mlab.com:63118/ellehacks2020", [collection]);
// var recvd_data2;
var test;
var recommendation_data = [] 
app.post("/receiptData",(req,res)=>{
    let params = req.body.parameters
    const recvd_data = params['data']
        res.json({
        "response":"got it !"
     })


db.collection(collection).find({}).toArray(function(err, docs) {
        if (err) {
           handleError(res, err.message, "Failed to get contacts.");
       } else {
        console.log(recvd_data.length);
        console.log(docs.length)
            for(let i = 0; i<recvd_data.length; i++){
                for(let j = i; j<docs.length; j++){
                    if(recvd_data[i]['item'].toLowerCase() === (docs[j]['name'].toLowerCase())){
                        recommendation_data = {
                            'name':         docs[j]['name'],
                            'co2':          docs[j]['co2_in_kg'],
                            'p_material':   docs[j]['p_material'],
                            'waste':        docs[j]['recyclable'],
                            'rec_data':     docs[j]['recommendation']
                        }
                        console.log(recommendation_data);
                        break;
                    }
                }
            }
        }
    });
});

app.get("/send_data", (req, res) => {
    res.send({
        recommendation_data
    })
});

const server = app.listen(PORT, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
   
  });

