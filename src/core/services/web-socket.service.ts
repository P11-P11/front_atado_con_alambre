import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient: Stomp.Client | null = null;

  connect(endpoint: string): Subject<any> {
    const socket = new SockJS('/ws-notifications');
    this.stompClient = Stomp.over(socket);

    const subject = new Subject<any>();

    this.stompClient.connect({}, () => {
      this.stompClient?.subscribe(endpoint, (message) => {
        subject.next(JSON.parse(message.body));
      });
    });

    return subject;
  }

  disconnect() {
    if (this.stompClient) {
      this.stompClient.disconnect();
    }
  }
}
