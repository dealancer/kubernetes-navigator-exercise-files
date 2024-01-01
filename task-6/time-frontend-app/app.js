const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  let time_backend_url = process.env.TIME_BACKEND_URL;


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  console.log(`Connecting to ${time_backend_url}.`);
  http.get(time_backend_url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      let timestamp = JSON.parse(data).timestamp;
      let date = new Date(timestamp);
      let date_str = date.toLocaleString(date);

      res.end(`\
        <html>\n\
          <body>\n\
            <h1>Current date and time is ${date_str}.<h1>\n\
          </body>\n\
        </html>\n\
      `);
    });

  }).on("error", (err) => {

    console.log("Error: " + err.message);

    res.end(`\
      <html>\n\
        <body>\n\
          <h1>Can't get current date and time. Error: ${err}.</h1>\n\
        </body>\n\
      </html>\n\
    `);

  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
