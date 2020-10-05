import { NewFormElementDefinitionComponent } from './../new-form-definition/new-form-element-definition.component';
import { FormPublishService } from './../../services/form-publish.service';
import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormField } from '../../../models/form-field';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  formField: FormField;


  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(
    zone: NgZone,
    private formPublishService: FormPublishService,
    private matDialog: MatDialog
    ) {

  }

  onAddNewFormDefinitionElement(): void{
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(NewFormElementDefinitionComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.formField = result;
      console.log(this.formField);
    });
  }

  ngOnInit(): void {
  }

  onFormDefinitionsResetClick(): void {
    this.formPublishService.publishFormReset();
  }


  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
