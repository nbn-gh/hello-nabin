import { Component, ElementRef } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  // constructor(private elementRef: ElementRef) {
  //   this.elementRef.nativeElement.ad
  //  }
  isSideMenuOpen: boolean = false;

  navigationMenus = {};
  isDarkTheme: boolean = true;

  openSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  constructor(private themeSvc: ThemeService) {}

  ngOnInit() {
    var theme = localStorage.getItem('theme');
    if (theme) {
      this.themeSvc.loadTheme(theme);
    } else {
      localStorage.setItem('theme', 'dark');
      this.themeSvc.loadTheme('dark');
    }
    this.isDarkTheme = theme === 'dark' ? true : false;
  }

  changeTheme(theme: string) {
    localStorage.setItem('theme', theme);
    this.isDarkTheme = theme === 'dark' ? true : false;
    this.themeSvc.loadTheme(theme);
  }

  sideMenuClicked() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }
}
