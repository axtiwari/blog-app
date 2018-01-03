import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../posts/user';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../posts/user.service';

@Component({
  selector: 'blog-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() id: number;

  user$: Observable<IUser>;

  ngOnInit() {
    this.user$ = this.userService.getUser(this.id);
  }

}
