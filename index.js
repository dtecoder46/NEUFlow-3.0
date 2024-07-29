const { exec } = require('child_process'); // used for executing shell commands

// import syntax for using ExpressJS

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// serves all the static files

app.use(express.static(path.join(__dirname, 'web/')));
app.use(express.static(path.join(__dirname, 'assets/')));

app.get('/', (req, res) => {
  // this command allows the usage of TailwindCSS in the HTML syntax
  exec('npx tailwindcss -i input.css -o ./assets/output.css --watch',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
  res.sendFile(path.join(__dirname, 'web/index.html'))
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});