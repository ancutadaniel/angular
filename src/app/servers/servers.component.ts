import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // select by component
  // selector: '[app-servers]', // select by attribute and change the html to use that
  // selector: '.app-servers', // select by class
  templateUrl: './servers.component.html', // or can be like below
  // template: `<app-server></app-server><app-server></app-server>`,
  styleUrls: ['./servers.component.css'], // or can be like below
  // styles: [
  //   `
  //     h3 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Test Server';
  serverCreated = false;
  username = '';
  servers: Array<string> = ['testServer', 'testServer2'];
  showPassword = false;
  buttonsClick: Array<object> = [];
  counts = 1;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreationStatus = `Server was created! Name is :${this.serverName}`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser(): void {
    this.username = '';
  }

  onClick() {
    this.showPassword = !this.showPassword;
    // this.buttonsClick.push(this.counts);
    // this.counts++;
    this.buttonsClick.push(new Date());
  }
}
