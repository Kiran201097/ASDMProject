var express=require("express");
var app=express();

function logger(req,resp,next){
    console.log(req.path);
    console.log(req.query);
    next();
}

function Dashboard(req,resp){
    resp.sendFile("/public/index.html",{root:__dirname});
}

app.use(logger);
app.get("/",Dashboard);

app.listen(8081,()=>{
    console.log("server started on port 8081");
})