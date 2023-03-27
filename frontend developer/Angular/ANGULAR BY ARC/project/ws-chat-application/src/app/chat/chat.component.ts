import { ChatMessageDto } from './../models/chatMesagedto';
import { WebSocketService } from './../services/web-socket.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cf-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy{

  constructor(public webSocketService:WebSocketService){}

  ngOnInit(): void {
    this.webSocketService.openWebScocket()
  }


  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket()
  }

  // send:any;
  sendMessage(sendForm:NgForm){
    const chatMessageDto = new ChatMessageDto(sendForm.value.user , sendForm.value.message);
    console.log("sendForm   :-    " , sendForm.value)
    this.webSocketService.sendMessage(chatMessageDto)
    sendForm.controls['message'].reset()
  }
}
