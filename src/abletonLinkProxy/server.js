const http = require('http');
const express = require('express');
const io = require('socket.io');
const Abletonlink = require('abletonlink');

const Server = {
  http: null,
  io: null,
  link: null,
  lastBeat: 0,
  numPeers: 0,
  port: null,
  async start({ port = 0 } = {}){

    const app = express();

    Server.http = http.createServer(app);
    Server.io = io(Server.http);

    Server.link = new Abletonlink(0, 4.0, true);

    Server.io.on('connection', (client) => {

      console.log('Client connected', client.conn.remoteAddress);
      client.emit('numPeers', Server.numPeers);

      client.on('disconnect', () => {

        console.log('Client disconnected', client.conn.remoteAddress);

      });

    });

    Server.link.on('numPeers', (numPeers) => {

      Server.numPeers = numPeers;
      console.log('NumPeers', numPeers);
      Server.