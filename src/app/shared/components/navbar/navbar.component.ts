// 1. Navbar genarated from angular schematics .ts file
// import { Component } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map, shareReplay } from 'rxjs/operators';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })
// export class NavbarComponent {

//   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
//     .pipe(
//       map(result => result.matches),
//       shareReplay()
//     );

//   constructor(private breakpointObserver: BreakpointObserver) {}

// }
// Close 1. Navbar genarated from angular schematics .ts file

// 2.Custom Nav bar ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor() {}
}

// Close 2.Custom Nav bar ts
