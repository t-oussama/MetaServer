const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const domainController = require('./modules/domain/DomainController');
const regionController = require('./modules/region/RegionController');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/domains", domainController.index);
app.get("/api/domains/:id", domainController.get);
app.post("/api/domains", domainController.store);
app.patch("/api/domains/:id", domainController.update);
app.delete("/api/domains/:id", domainController.delete);

app.get("/api/regions", regionController.index);
app.get("/api/regions/:id", regionController.get);
app.post("/api/regions", regionController.store);
app.patch("/api/regions/:id", regionController.update);
app.delete("/api/regions/:id", regionController.delete);


app.use("*", function(request,response){
    response.status(404).send(JSON.stringify({message: 'Controller not found !'}));
});


app.use(function (err, req, res, next) {
console.error(err.stack)
res.status(500).send('Something broke!')
next(err);
});

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});