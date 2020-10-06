import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { ValidatorType } from 'src/app/helpers/validator-type.enum';
import { FormField } from 'src/app/models/form-field';
import { FormPublishService } from '../../services/form-publish.service';
import { FormFieldElementType } from './../../../helpers/form-field-element-type-enum';

@Component({
  selector: 'app-new-form-element-definition',
  templateUrl: './new-form-element-definition.component.html',
  styleUrls: ['./new-form-element-definition.component.scss']
})
export class NewFormElementDefinitionComponent implements OnInit {

  formField: FormField;
  public formFieldElementType = FormFieldElementType;
  newFormDefinition: FormGroup;

  constructor(
    // private formPublishService: FormPublishService,
    public dialogRef: MatDialogRef<NewFormElementDefinitionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormField,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.newFormDefinition = this.fb.group({
      definitionElementType: ['', Validators.required],
      definitionFormControlName: ['', Validators.required],
      definitionPlaceholderName: ['', Validators.required],
      definitionCssClassName: [''],
    });



  }

  publishFormSetDefinitionClick(): void{
    //console.log('Form Def:' + );
//     const formDef = this.createFormSetDefnition();
//     this.formPublishService.publishFormFieldDefinition(formDef);

  }

formSubmit(form): void {
  if (this.newFormDefinition.valid) {

    const newFormFieldDefinition = new FormField();

    newFormFieldDefinition.formControlName = this.newFormDefinition.value.definitionFormControlName;
    newFormFieldDefinition.formElementType = this.newFormDefinition.value.definitionElementType;
    newFormFieldDefinition.formCssClassName = this.newFormDefinition.value.definitionCssClassName;
    newFormFieldDefinition.formPlaceHolderName = this.newFormDefinition.value.definitionPlaceholderName;
    newFormFieldDefinition.formFieldValidators.push(ValidatorType.Required);

    this.dialogRef.close(newFormFieldDefinition);

  }
}

 onNoActionClick(): void {
  this.dialogRef.close();
}

 onElementTypeChanged(theEvent: Event): void{

 }




  createFormSetDefnition(): FormField{

    const formSetDef = new FormField();

    formSetDef.formControlName = 'LastName';
    formSetDef.formElementType = FormFieldElementType.InputText;
    formSetDef.formCssClassName = 'ClassName';
    formSetDef.formPlaceHolderName = '';
    formSetDef.formFieldValidators.push(ValidatorType.Required);

    return formSetDef;

  }

}
