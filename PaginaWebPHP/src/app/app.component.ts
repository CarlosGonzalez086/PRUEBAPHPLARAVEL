import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './servicios/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'PaginaWebPHP';
  public user: User | any;
  constructor(
    private _userService: UserService
  ) {
    this.user = new User(1, '', '');
  }
  ngOnInit() {


  }
  onSubmit(form:any){
    this._userService.register(this.user).subscribe(
      response =>{
        console.log(response);
        form.reset();
      },error=>{
        console.log(<any>error);
      }
    );
  }


}
