var http = require("http");
var express = require("express");

const app = express();

const root = `${__dirname}/static`;
app.use(express.static(root));

var options = {
  root: __dirname,
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true,
    "x-encoding": "utf-8"
  }
};
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,MimeType");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.get("/api/dicts", function(req, res) {
  res.json({
    data: {
      element_types: [
        {
          label: "сражение",
          name: "battle"
        },
        {
          label: "война",
          name: "war"
        }
      ],
      default_element: 100
    }
  });
});


app.get("/api/elements/100", function(req, res) {
  res.sendFile("test_data/jsons/second_punic_war.json", options);
});
app.get("/api/elements/100/text", function(req, res) {
  res.sendFile("test_data/jsons/second_punic_war_text.json", options);
});

app.get("/api/elements/1", function(req, res) {
  res.sendFile("test_data/jsons/roman_republic.json", options);
});
app.get("/api/elements/1/text", function(req, res) {
  res.sendFile("test_data/jsons/roman_republic_text.json", options);
});

app.get("/api/elements/7", function(req, res) {
  res.sendFile("test_data/jsons/carthago.json", options);
});
app.get("/api/elements/7/text", function(req, res) {
  res.sendFile("test_data/jsons/carthago_text.json", options);
});

app.get("/api/elements/9001", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_cannae.json", options);
});
app.get("/api/elements/9001/text", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_cannae_text.json", options);
});

app.get("/api/elements/9002", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_the_trebia.json", options);
});
app.get("/api/elements/9002/text", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_the_trebia_text.json", options);
});

app.get("/api/elements/9003", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_lake_trasimene.json", options);
});
app.get("/api/elements/9003/text", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_lake_trasimene_text.json", options);
});

app.get("/api/elements/9005", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_zama.json", options);
});
app.get("/api/elements/9005/text", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_zama_text.json", options);
});

app.get("/api/elements/19001", function(req, res) {
  res.sendFile("test_data/jsons/hannibal_italian_route.json", options);
});

app.get("/api/elements/1018", function(req, res) {
  res.sendFile("test_data/jsons/hannibal_barka.json", options);
});
app.get("/api/elements/1018/text", function(req, res) {
  res.sendFile("test_data/jsons/hannibal_barka_text.json", options);
});

app.get("/api/elements/1001", function(req, res) {
  res.sendFile("test_data/jsons/scipio_africanus.json", options);
});
app.get("/api/elements/1001/text", function(req, res) {
  res.sendFile("test_data/jsons/scipio_africanus_text.json", options);
});

app.get("/api/shapes/101", function(req, res) {
  res.sendFile("test_data/shapes/battle_of_cannae.geojson", options);
});
app.get("/api/shapes/71", function(req, res) {
  res.sendFile("test_data/shapes/carthago.geojson", options);
});
app.get("/api/shapes/11", function(req, res) {
  res.sendFile("test_data/shapes/roman_republic.geojson", options);
});

app.get("/api/elements/9001/shapes", function(req, res) {
  res.sendFile("test_data/shapes/battle_of_cannae.geojson", options);
});
app.get("/api/elements/7/shapes", function(req, res) {
  res.sendFile("test_data/shapes/carthago.geojson", options);
});
app.get("/api/elements/1/shapes", function(req, res) {
  res.sendFile("test_data/shapes/roman_republic.geojson", options);
});

var PORT = process.env.PORT || 9000;
http.createServer(app)
  .listen(PORT);
