const http = require("http");
const express = require("express");
const jsonfile = require("jsonfile");

const app = express();

const options = {
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
  res.sendFile("test_data_new/dicts.json", options);
});
app.get("/api/public/scenarios/second_punic_war", function(req, res) {
  res.sendFile("test_data/jsons/contexts/second_punic_war.json", options);
});
app.get("/api/public/scenarios/0", function(req, res) {
  res.sendFile("test_data/jsons/contexts/world_hist_process.json", options);
});
app.get("/api/public/elements", function(req, res, next) {
  var output = { meta: {}, data: [] };
  if (req.query.ids) {
    var files = [
      "test_data/jsons/roman_republic.json",
      "test_data/jsons/carthago.json",
      "test_data/jsons/battle_of_cannae.json",
      "test_data/jsons/battle_of_the_trebia.json",
      "test_data/jsons/battle_of_lake_trasimene.json",
      "test_data/jsons/battle_of_zama.json",
      "test_data/jsons/hannibal_italian_route.json",
      "test_data/jsons/hannibal_barka.json",
      "test_data/jsons/scipio_africanus.json"
    ];
    for (var path of files) {
      var file = jsonfile.readFileSync(path);
      output.data.push(file);
    }
    output.meta.count = output.data.length;
    res.json(output);
  } else {
    next();
  }
});

app.get("/api/public/search/elements/:name", function(req, res) {
  res.sendFile(`test_data/jsons/${req.query.name}.json`, options);
});

app.get("/api/public/elements/100", function(req, res) {
  res.sendFile("test_data/jsons/second_punic_war.json", options);
});
// app.get("/api/public/elements/100/text", function(req, res) {
//   res.sendFile("test_data/jsons/second_punic_war_text.json", options);
// });

app.get("/api/public/elements/1", function(req, res) {
  res.sendFile("test_data/jsons/roman_republic.json", options);
});
// app.get("/api/public/elements/1/text", function(req, res) {
//   res.sendFile("test_data/jsons/roman_republic_text.json", options);
// });

app.get("/api/public/elements/7", function(req, res) {
  res.sendFile("test_data/jsons/carthago.json", options);
});
// app.get("/api/public/elements/7/text", function(req, res) {
//   res.sendFile("test_data/jsons/carthago_text.json", options);
// });

app.get("/api/public/elements/9001", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_cannae.json", options);
});
// app.get("/api/public/elements/9001/text", function(req, res) {
//   res.sendFile("test_data/jsons/battle_of_cannae_text.json", options);
// });

app.get("/api/public/elements/9002", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_the_trebia.json", options);
});
// app.get("/api/public/elements/9002/text", function(req, res) {
//   res.sendFile("test_data/jsons/battle_of_the_trebia_text.json", options);
// });

app.get("/api/public/elements/9003", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_lake_trasimene.json", options);
});
// app.get("/api/public/elements/9003/text", function(req, res) {
//   res.sendFile("test_data/jsons/battle_of_lake_trasimene_text.json", options);
// });

app.get("/api/public/elements/9005", function(req, res) {
  res.sendFile("test_data/jsons/battle_of_zama.json", options);
});
// app.get("/api/public/elements/9005/text", function(req, res) {
//   res.sendFile("test_data/jsons/battle_of_zama_text.json", options);
// });

app.get("/api/public/elements/19001", function(req, res) {
  res.sendFile("test_data/jsons/hannibal_italian_route.json", options);
});

app.get("/api/public/elements/1018", function(req, res) {
  res.sendFile("test_data/jsons/hannibal_barka.json", options);
});
// app.get("/api/public/elements/1018/text", function(req, res) {
//   res.sendFile("test_data/jsons/hannibal_barka_text.json", options);
// });

app.get("/api/public/elements/1001", function(req, res) {
  res.sendFile("test_data/jsons/scipio_africanus.json", options);
});
// app.get("/api/public/elements/1001/text", function(req, res) {
//   res.sendFile("test_data/jsons/scipio_africanus_text.json", options);
// });

app.get("/api/public/shapes/101", function(req, res) {
  res.sendFile("test_data/shapes/battle_of_cannae.geojson", options);
});
app.get("/api/public/shapes/71", function(req, res) {
  res.sendFile("test_data/shapes/carthago.geojson", options);
});
app.get("/api/public/shapes/11", function(req, res) {
  res.sendFile("test_data/shapes/roman_republic.geojson", options);
});

app.get("/api/public/elements/9001/shapes", function(req, res) {
  res.sendFile("test_data/shapes/battle_of_cannae.geojson", options);
});
app.get("/api/public/elements/7/shapes", function(req, res) {
  res.sendFile("test_data/shapes/carthago.geojson", options);
});
app.get("/api/public/elements/1/shapes", function(req, res) {
  res.sendFile("test_data/shapes/roman_republic.geojson", options);
});

var PORT = process.env.PORT || 9000;
http.createServer(app)
  .listen(PORT);
