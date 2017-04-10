import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  url: string = 'http://localhost:3000';
  socket: any;

  sendMessage(message) {
    this.socket = io(this.url);
    this.socket.emit('add-message', message);
  }
}
