import {Component} from '@angular/core';
import {WebSocketService} from "./services/websocket.service";
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public notifications = 0;
    notification='';

    constructor(private webSocketService: WebSocketService) {

        let stompClient = this.webSocketService.connect();

        // stompClient.connect({}, frame => {

        //     stompClient.subscribe('/topic/notification', notifications => {

        //         this.notifications = JSON.parse(notifications.body).count;

        //     })

        // });
        stompClient.connect({}, frame => {
            
            stompClient.subscribe('/user/swarup/reply', data => {
                this.notification =data.body;
                 console.log(data)
                // this.notifications = JSON.parse(notifications.body).count;

            })

        });
    }
}
