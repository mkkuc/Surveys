import { Component, OnDestroy, OnInit } from '@angular/core';
import TestService from '../../shared/test.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy{
  subscriptions: Subscription[] = [];

  constructor(
    private testService: TestService
  ) { }
  
  ngOnInit(): void {
    let subscription = this.testService.download()
    .subscribe(
      (result: any) => {
        console.log(result);
      },
      (error: any) => {
        console.error(error)
      }
    );

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription) => subscription.unsubscribe()
    );
  }
}
