import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse.pipe';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReversePipe],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
// export class AppComponent {
//   title = 'mini_project';

//   a: number = 2;
//   b: number = 2;
//   c: number = 4;


//   items = [
//     { id: 1, name: 'item1'},
//     { id: 2, name: 'item2'},
//     { id: 3, name: 'item3'},
//   ];


//   grade: string = 'A';

//   today: number = Date.now();

//   price: number = 1234.56;

// }

export class AppComponent{
 
  data: string[] = [];
  posts: any[] = [];
  constructor(private dataServices: DataService){
    this.data = this.dataServices.getData();
  }

  ngOnInit(){
    this.dataServices.getPost().subscribe({
      next: (response: any) => {
        this.posts=response;
      },
      error: (error: any) => {
        console.log(error);

      }
    })
  }

 
}