import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.scss']
})
export class MaterialTestComponent {

  constructor(private _courseDialog : MatDialog){

  }

  openEditCourseDialog(){
    this._courseDialog.open(EditCourseComponent, {
          data : {
            courseId : 1,
            courseName : 'Angular'
          }
        })
        .afterClosed()
        .subscribe({
          next : (result) => {
            console.log(result);
          }
        })
  }

}
