import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
  url: string = 'http://localhost:3000';
  socket: any;

  sendMessage(message) {
    this.socket = io(this.url);
    this.socket.emit('add-message', message);
  }

  getMessages() {
    return new Observable(observer => {
      this.socket = io(this.url);

      this.socket.on('message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }
}
