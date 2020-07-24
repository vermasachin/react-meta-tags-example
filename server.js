const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.get("/", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Sachin Verma");
    data = data.replace(
      /{{description}}/,
      "Sachin Verma's personal site and blog"
    );

    res.send(data);
  });
});

app.get("/about", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "About | Sachin Verma");
    data = data.replace(/{{description}}/, "About Sachin Verma");

    res.send(data);
  });
});

app.get("/about", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");

  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Contact | Sachin Verma");
    data = data.replace(/{{description}}/, "Contact Sachin Verma");

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("*", function (req, res) {
  const filePath = path.resolve(__dirname, "./public", "index.html");
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    data = data.replace(/{{title}}/, "Sachin Verma");
    data = data.replace(
      /{{description}}/,
      "Sachin Verma's personal site and blog"
    );

    res.send(data);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
