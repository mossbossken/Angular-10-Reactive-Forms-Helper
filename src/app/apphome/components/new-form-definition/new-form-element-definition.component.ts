import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
      definitionElementType: ['element type'],
      definitionFormControlName: ['form control name'],
      definitionPlaceholderName: ['placeholder name'],
    });



  }



  publishFormSetDefinitionClick(): void{
    //console.log('Form Def:' + );
//     const formDef = this.createFormSetDefnition();
//     this.formPublishService.publishFormFieldDefinition(formDef);

  }

//   addFormFieldDefinitionClick(): void{

//     const formField = this.createFormSetDefnition();
//     this.formPublishService.publishFormFieldDefinition(formField);

//  }

 onNoActionClick(): void {
  this.dialogRef.close();
}

 onElementTypeChanged(theEvent: Event): void{

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

}
