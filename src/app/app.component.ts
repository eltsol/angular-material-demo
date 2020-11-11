import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-demo';
  notifications = 0;
  loadSpinner = false;
  opened = false;
  selectedValue: string;
  options: string[] = ['Angular', 'React', 'Vue'];
  minDate = new Date();
  maxDate = new Date(2019, 3, 10);

  loadData() {
    this.loadSpinner = true;
  }

  log(state) {
    console.log(state);
  }

  logChange(index) {
    console.log(index);
  }

  dateFilter(date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message, action) {
    let snackBarRef = this.snackBar.open(message, action, { duration: 2000 });

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered');
    });
  }
}
