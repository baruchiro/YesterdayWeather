const fs = require("fs");

const API_KEY = process.env.API_KEY;

fs.readFile("main.js", "utf8", (err, data) => {
  if (err) throw err;

  const result = data.replace(/process\.env\.API_KEY/g, API_KEY);

  fs.writeFile("main.js", result, "utf8", (err) => {
    if (err) throw err;
  });
});
