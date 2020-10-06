
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import { FormField} from '../../../models/form-field';
import { ValidatorType } from '../../../helpers/validator-type.enum';
import { FormPublishService } from '../../services/form-publish.service';
import { FormFieldElementType } from './../../../helpers/form-field-element-type-enum';
import { NewFormElementDefinitionComponent } from '../new-form-definition/new-form-element-definition.component';



@Component({
  selector: 'app-define',
  templateUrl: './define.component.html',
  styleUrls: ['./define.component.scss']
})
export class DefineComponent implements OnInit {

  formDefinitions: FormGroup;
  formDefinitionsInvalid: boolean = false;
  formFieldDefinitions: FormField[] = [];
  numberOfDefinitions: number = 0;
  private newFormGroup: FormGroup;

  public formFieldElementType = FormFieldElementType;

  constructor(
    private matDialog: MatDialog,
  ){}


  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>): void {
    console.log(event);
    moveItemInArray(this.formFieldDefinitions, event.previousIndex, event.currentIndex);
  }


  onFormReset(value: any): void{



  }

  openFormFieldDefinitionDialogClick(): void {
    const dialogRef = this.matDialog.open(NewFormElementDefinitionComponent, {
      width: '700px',
      height: '500',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != null){
        this.formFieldDefinitions.push(result);
      }
    });
  }




  deleteFormDefinitionClick(indexOfFormDefinition: number): void{

    this.formFieldDefinitions.splice(indexOfFormDefinition, 1);

  }

  editFormSetDefinitionClick(indexOfFormDefinition: number): void{
    alert('to be done');
  }


  publishFormSetDefinition(): void{

    // const formDef = this.createFormSetDefnition(this.formDefinitions);
    // this.formPublishService.publishNewFormSetDefinition(formDef);

  }



  getNumberOfFormDefs(): number{

    this.numberOfDefinitions = (this.formDefinitions.get('definitions') as FormArray).length;
    return this.numberOfDefinitions;

  }




  createFormSetDefnition(formVals: FormGroup): FormField{

    const formSetDef = new FormField();

    formSetDef.formControlName = formVals.value.def;
    formSetDef.formElementType = formVals.value.definitionControlName;
    formSetDef.formCssClassName = formVals.value.formCssClassName;
    formSetDef.formPlaceHolderName = formVals.value.definitionPlaceholderName;
    formSetDef.formFieldValidators.push(ValidatorType.Required);

    return formSetDef;

  }



  generateFormDefinitions(): void{

  }



}


