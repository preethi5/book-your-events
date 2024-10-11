import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Subject } from 'rxjs';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DashboardComponent,
  ],
  providers: [ThemeService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  filterValSub = new Subject();

  @ViewChild('searchBox', { static: false }) searchBox: ElementRef | undefined;

  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : '';
  }

  constructor(private themeService: ThemeService) {}
  onSearch() {
    this.filterValSub.next({
      filterVal: this.searchBox?.nativeElement.value,
    });
  }
}
