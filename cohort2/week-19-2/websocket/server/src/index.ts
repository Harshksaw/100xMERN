import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer(function(request: any, response: any) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.end("hi there");
});

const wss = new WebSocketServer({ server });
let count = 0;
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
  count++;
  console.log('Client connected. Total clients connected:', count);

  ws.send('Hello! Message From Server!!');
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

// import express from 'express'
// import { WebSocketServer } from 'ws'

// const app = express()
// const httpServer = app.listen(8080)

// const wss = new WebSocketServer({ server: httpServer });

// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);



//   ws.on('message', function message(data, isBinary) {
//     console.log(ws)

//     wss.on('message', function message(data, isBinary) {
//       console.log('received: %s', data);
//       wss.clients.forEach(function each(client) {
//         if (client !== ws && client.readyState === WebSocket.OPEN) {
//           client.send(data);
//         }
//     })


//     });
//   });

//   ws.send('Hello! Message From Server!!');
// });