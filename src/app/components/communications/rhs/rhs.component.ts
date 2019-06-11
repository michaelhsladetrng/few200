import { Component, OnInit } from '@angular/core';
import { CommunicationsService } from '../communications.service';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.css']
})
export class RhsComponent implements OnInit {

  message = '';
  message2: string;
  constructor(private service: CommunicationsService) {
    service.getSubscription()
      .subscribe(newMessage => {
        console.log('Got a new message: ', newMessage);
        this.message2 = newMessage;
      });
  }

  ngOnInit() {
  }

  getIt() {
    this.message = this.service.getMessage();
  }

}
