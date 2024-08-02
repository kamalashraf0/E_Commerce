import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  username : string = ''
  password : string = ''


  onSubmit() : void {
      if (this.username && this.password )
      {
        console.log(this.username  , this.password);
      }

      else
      {
        console.log("not exists");
      }
  }




}
