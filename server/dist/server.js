"use strict";var express=require("express"),pg=require("pg"),app=express(),path=require("path"),clientBuildDir=__dirname+"/../../client/dist/";app.set("port",process.env.PORT||5e3),app.use(express.static(clientBuildDir)),app.set("view engine","ejs"),app.get("/times",function(e,r){for(var n="",p=process.env.TIMES||5,t=0;t<p;t++)n+=t+" ";r.send(n)}),app.get("/db",function(e,r){pg.connect(process.env.DATABASE_URL,function(e,n,p){if(e)return console.error(e),void r.send("Error "+e);n.query("SELECT * FROM test_table;",function(e,n){p(),e?(console.error(e),r.send("Error "+e)):r.render("pages/db",{results:n.rows})})})}),app.get("*",function(e,r){r.sendFile(path.join(clientBuildDir+"/index.html"))}),app.listen(app.get("port"),function(){console.log("Node app is running on port",app.get("port"))});
//# sourceMappingURL=server.js.map
