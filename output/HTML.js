const fs = require("fs")

function generateHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark">
            <h1 class= "text-primary">Meet The Team</h1>
        </nav>
        <br>


        `;
        fs.writeFile("./output/team.html", html, function(err) {
            if (err) {
                console.log(err);
            }
        });
        console.log("enter your team");
}

module.exports = generateHTML();