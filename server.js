/*var count=34;
count++;
console.log("Server is running");
console.log(count);


//CTL + SHIFT + C   

*/

var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Welcome to the Cloud Computing Module</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <h5><li>Introduction to the cloud</li>"+
                    " <h5><li>Cloud Services</li>"+
                    " <h5><li>IaaS, PaaS, SaaS</li>"+
                    " <h5><li>Creating AWS EC2 Instances</li>"+
                    "<hr/>"+
                    "<hr/>"+
             "</ol>"+
             "<h3>Docker Basic Commands</h3>"+
             "<ol>"+
             " <h5><li>sudo apt install docker.io</li>"+
             " <h5><li>sudo systemctl status docker</li>"+
             " <h5><li>sudo docker ps</li>"+
             " <h5><li>sudo docker images</li>"+
      "</ol>"+
             );
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
// if external packages are required
// we have to download those packages from internet using  package manager tool
// Runtime--------tools-------------packages-----------------------config file
// Java-----------maven--------------.jar files----------------------pom.xml
// Android--------graddle------------android jar file----------------pom.xml
// Python---------pip----------------Python libraries----------------
// .NET ---------Nugget--------------dll files-----------------------package.config
// NodeJS----------npm --------------download node modules-----------package.json 