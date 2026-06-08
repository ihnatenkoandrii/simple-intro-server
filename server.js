const http = require("http");

const REDIRECT_URL =
  "https://docs.google.com/document/d/1Io2T0p4q6DJUdJFn7DUfVg7GoxAMzzwkr536Df__V1M/edit?usp=drive_link";

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(302, { Location: REDIRECT_URL });
  res.end();
});

server.listen(PORT, () => {
  console.log(`Redirect server running at http://localhost:${PORT}`);
  console.log(`All requests redirect to: ${REDIRECT_URL}`);
});
