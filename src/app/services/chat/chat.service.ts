import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  AUTH_URL = 'http://localhost:3000/token';
  INSTANCE_LOCATOR = 'YOUR_INSTANCE_LOCATOR';
  GENERAL_ROOM_ID = 'YOUR_ROOM_ID';
  GENERAL_ROOM_INDEX = 0;

  chatManager: ChatManager;
  currentUser;
  messages = [];


  usersSubject = new BehaviorSubject([]);
  messagesSubject = new BehaviorSubject([]);

  constructor() { }


  async connectToChatkit(userId: string) {
    this.chatManager = new ChatManager({
      instanceLocator: this.INSTANCE_LOCATOR,
      userId,
      tokenProvider: new TokenProvider({ url: this.AUTH_URL })
    })

    this.currentUser = await this.chatManager.connect();

    await this.currentUser.subscribeToRoom({
      roomId: this.GENERAL_ROOM_ID,
      hooks: {},
      messageLimit: 20
    });
  }
}
