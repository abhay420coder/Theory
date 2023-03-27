import { ChatMessageDto } from './../models/chatMesagedto';
// import { WebSocketService } from './web-socket.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket : WebSocket | undefined;
  chatMessage:ChatMessageDto[] = [] ; // it will store all the message which comes from client

  url:string = 'ws://localhost:8000/chat';
  constructor( ) { }

  // open webSocket

  public openWebScocket(){
    this.webSocket = new WebSocket(this.url)
    // this WebSocket() takes two aregument :-  WebSocket(url: string | URL, protocols?: string | string[] | undefined): WebSocket

    // onopen function will handle event when websocke is opened
    this.webSocket.onopen = (event) => {
      console.log('open' , event);
    }

    // onmessage function will handle event when websocket is transferring server-to-client and cient-to-server
    // when client requests from server and server responds to client
    // this function is handling the incoming message (receiving message = server sends to client)
    this.webSocket.onmessage = (event) => {
      console.log('message' , event);
      // it will recieve event that has chat-message data  (event.data)  that is object stringfy
      //  so we need to extract chat-message and to do parse it :-  JSON.parse(event.data);
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessage.push(chatMessageDto)
    }

    // onclose function will handle event when websocket is closed
    this.webSocket.onclose = (event) => {
      console.log('close' , event);
    }
  }


    // this function is handling the sending message (sending message = client sends to server)
  public sendMessage(chatMessageDto: ChatMessageDto){
    // now
    this.webSocket?.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket(){
    // now
    this.webSocket?.close();
  }
}
