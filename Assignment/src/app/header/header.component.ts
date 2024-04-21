import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public router: Router) {

  }
  selectedtabIndex: any;
  tabPanel: any = "Header";
  tabName : any ;
  url : any ;
  tab : any ;
  isDarkMode : any = false;
  ngOnInit() {
    this.url = window.location.href;
    this.tab = this.url.split("/")
    this.tabName = this.tab[this.tab.length - 1];
    switch (this.tabName) {
      case "home":
        this.selectedtabIndex = 2;
        break;
      case "my-space":
        this.selectedtabIndex = 1;
        break;
      case "events":
        this.selectedtabIndex = 3;
        break;
      case "videos":
        this.selectedtabIndex = 4;
        break;
      case "live":
        this.selectedtabIndex = 5;
        break;
      case "register":
        this.selectedtabIndex = 6;
        break;
    }
  }
  tabChanged(event: any) {
    this.selectedtabIndex = event;
    
  }
  onSubmit(){
    const checkbox = document.getElementById("toggleSwtich") ;

    console.log("cjected", checkbox)

    this.isDarkMode = !this.isDarkMode;
    document.documentElement.style.setProperty('--text-color', this.isDarkMode ? '#fff' : '#333');
    document.documentElement.style.setProperty('--background-color', this.isDarkMode ? 'Black' : 'White');
    document.documentElement.style.setProperty('--background-image', this.isDarkMode ?  'linear-gradient(to bottom, transparent 45%, rgba(0, 0, 0, 0.96) 93%)' : 'linear-gradient(to bottom, transparent 45%, rgba(255, 255, 255, 0.96) 93%)');

  }
}
