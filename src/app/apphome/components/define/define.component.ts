
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  formField: FormField;
  numberOfDefinitions: number = 0;
  public formFieldElementType = FormFieldElementType;

  constructor(
      private fb: FormBuilder,
      private formPublishService: FormPublishService,
      private matDialog: MatDialog
  ) {}




  ngOnInit(): void {
    try
    {
    this.formDefinitions = this.fb.group({
      nameOfThisFormSet: [''],
      definitions: this.fb.array([
        this.addDefinitionFormGroup()
      ])
    });

    this.publishFormSetDefinition();

    this.formPublishService.getFormReset().subscribe((value) =>{
      console.log(value);
      this.onFormReset(value);
    });

    this.formPublishService.getFormFieldDefinition().subscribe((value) =>{
      var newFormGroup = this.fb.group({
        definitionElementType: [''],
        definitionPlaceholderName: [''],
        definitionFormControlName: [''],
      });

      console.log('in ngOninit');

      this.addFormFieldDefinition(newFormGroup);

    });
    }
    catch(ex)
    {
      console.log('define: ' + ex);
    }

  }


  onFormReset(value: any): void{

    this.formDefinitions = this.fb.group({
      nameOfThisFormSet: [''],
      definitions: this.fb.array([
        this.addDefinitionFormGroup()
      ])
    });


  }

  openFormFieldDefinitionDialogClick(): void {
    const dialogRef = this.matDialog.open(NewFormElementDefinitionComponent, {
      width: '700px',
      height: '500',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.formField = result;
      console.log(this.formField);
    });
  }


  deleteFormDefinition(indexOfFormDefinition: number): void{
    (this.formDefinitions.get('definitions') as FormArray).removeAt(indexOfFormDefinition);

  }


  publishFormSetDefinition(): void{

    const formDef = this.createFormSetDefnition();
    this.formPublishService.publishNewFormSetDefinition(formDef);

  }



  getNumberOfFormDefs(): number{

    this.numberOfDefinitions = (this.formDefinitions.get('definitions') as FormArray).length;
    return this.numberOfDefinitions;

  }




  createFormSetDefnition(): FormField{

    const formSetDef = new FormField();

    formSetDef.fieldDefinitionName = 'New Definition Name';
    formSetDef.formControlDefinition = 'LastName';
    formSetDef.formElementType = FormFieldElementType.InputText;
    formSetDef.formFieldClassName = 'ClassName';
    formSetDef.formPlaceHolderDefinition = '';
    formSetDef.formFieldValidators.push(ValidatorType.Required);

    return formSetDef;

  }



  generateFormDefinitions(): void{

  }



  addDefinitionFormGroup(): FormGroup{

    return this.fb.group({
      definitionElementType: [''],
      definitionPlaceholderName: [''],
      definitionFormControlName: [''],
    });

  }





  addFormFieldDefinition(newFormGroup: FormGroup): void{

    console.log('addFormFieldDefinition');
    (this.formDefinitions.get('definitions') as FormArray).push(newFormGroup);

  }


  onElementTypeChanged(): void{

  }

}

// export enum FormFieldElementType{
//   InputText = 'Input Text',
//   InputPassword = 'Input Password',
//   InputEmail = 'Input Email',
//   SelectOption = 'Select Option',
//   Checkbox = 'Check Box',
//   RadioButtonGroup = 'Radio Button Group',
//   textArea = 'Text Area'
// }



