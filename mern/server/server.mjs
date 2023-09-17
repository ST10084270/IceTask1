/*import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});*/

import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import https from "https";
import path from "path";
import fs from "fs";
import records from "./routes/record.mjs";

const options = {
  key: fs.readFileSync('C:/Users/Asheena/mern/server/keys/privatekey.pem'),
  cert: fs.readFileSync('C:/Users/Asheena/mern/server/keys/certificate.pem'),

}



const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());


app.use((reg,res,next)=>
{
    res.setHeader('Access-Control-Allow-Origin', '');
    res.setHeader('Access-Control-Allow-Headers', '');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
})

app.use("/record", records);

let server = https.createServer(options,app)

app.get('/',(req,res)=>{
  res.send('HTTPS in ExpressJS')
})

//start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });