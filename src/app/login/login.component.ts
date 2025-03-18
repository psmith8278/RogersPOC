import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // router: any;

  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl('/home');
  }

}
