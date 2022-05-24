const express= require('express');
const app = express();



app.get("/calc",(req,res)=>{
    let numberone=req.query.numberone;
    let numbertwo=req.query.numbertwo;
    let operation=req.query.operation;
    let result;
    numberone=parseInt(numberone);
    numbertwo=parseInt(numbertwo);

    if(operation==='add'){
        result= numberone + numbertwo;
    }else if(operation==='sub'){
        result= numberone - numbertwo;
    }else if(operation==='mul'){
        result= numberone * numbertwo;
    }else if(operation==='div'){
        result= numberone / numbertwo;
    }
    console.log(result);
    res.send(result.toString());
})


app.listen(process.env.PORT);