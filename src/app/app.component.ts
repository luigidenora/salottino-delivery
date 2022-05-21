import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'salottino';
  isAdminPage$: Observable<boolean> = of(false);
  constructor(private _router: Router) {}
  ngOnInit() {
    this.isAdminPage$ = this._router.events.pipe(
      filter((evt: any) => {
        return evt instanceof NavigationEnd;
      }),
      map((evt: NavigationEnd) => {
        return evt.url.includes('/admin');
      })
    );
  }
}
