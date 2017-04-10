npm install socket.io socket.io-client @types/socket.io-client --save

npm install nodemon concurrently --save-dev

npm install express method-override compression --save-dev

ng eject && npm i

// package.json
"start": "tsc && concurrently \"npm run tsc:w\" \"nodemon ./server/index.js\" ",

ng g s chat -m app.module

// service.ts
import * as io from 'socket.io-client';


url: string = 'http://localhost:4200';
socket: any;

this.socket = io(this.url);
this.socket.emit('add-message', message);

ng g c chat -m app-routing.module

// app-routing.module
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/chat' },
  { path: '/chat', component: ChatComponent }
];
