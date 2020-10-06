import { FormDefinitionOutput } from './../../models/form-definition-output';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import { FormField} from '../../models/form-field';
import { FormFieldElementType } from '../../helpers/form-field-element-type-enum';
import { ValidatorType } from '../../helpers/validator-type.enum';

@Injectable()
export class FormPublishService {

  private formSetPublished: BehaviorSubject<FormField>;
  private formSetDefinitionModel: FormField;
  private formDefinitionOutputModel: FormDefinitionOutput;
  private formDefinitionOutput: BehaviorSubject<FormDefinitionOutput>;
  private formReset: BehaviorSubject<boolean>;

  constructor() {

    try
    {
    this.formSetPublished = new BehaviorSubject<FormField>(this.formSetDefinitionModel);
    this.formDefinitionOutput = new BehaviorSubject<FormDefinitionOutput>(this.formDefinitionOutputModel);
    this.formReset = new BehaviorSubject<boolean>(false);

    const formDef = this.initFormSetDefnition();
    this.publishNewFormSetDefinition(formDef);
    }
    catch(ex)
    {
      console.log('form-publish: ' + ex);
    }
   }

   initFormSetDefnition(): FormField{

    const formSetDef = new FormField();

    formSetDef.formControlName = '';
    formSetDef.formElementType = null;
    formSetDef.formCssClassName = null;
    formSetDef.formPlaceHolderName = '';
    //formSetDef.formFieldValidators.push(ValidatorType.Required);

    return formSetDef;

  }

  publishFormReset(): void{
    console.log('requesting a form def reset');
    this.formReset.next(true);
  }

  getFormReset(): Observable<boolean>
  {
    return this.formReset.asObservable();
  }

  publishFormFieldDefinition(formField: FormField): void{
    console.log(formField);
    this.formSetPublished.next(formField);
  }

  getFormFieldDefinition(): Observable<FormField>
  {
    return this.formSetPublished.asObservable();
  }

  publishNewFormSetDefinition(formFieldDefinitionSet: FormField): void{
    const preparedFormFieldSettings = this.processFormDefinitionModel(formFieldDefinitionSet);
    this.formDefinitionOutput.next(preparedFormFieldSettings);
  }



  getFormFieldConvertedOutput(): Observable<FormDefinitionOutput>{
    return this.formDefinitionOutput.asObservable();
  }

  processFormDefinitionModel(formFieldDefinitionSet: FormField): FormDefinitionOutput{
    const formDefinitionOutput = new FormDefinitionOutput();

    formDefinitionOutput.htmlDefinition = this.prepareHtml(formFieldDefinitionSet);
    formDefinitionOutput.typescriptFormBuilderDefinition = this.prepareTypescriptFormBuilder(formFieldDefinitionSet);
    formDefinitionOutput.typescriptVarDeclaration = this.prepareTypescriptVarDeclaration(formFieldDefinitionSet);
    formDefinitionOutput.typescriptErrorMessages = this.prepareTypescriptErrorMessageDeclaration(formFieldDefinitionSet);

    return formDefinitionOutput;

  }

  prepareHtml(formFieldDefinitionSet: FormField): string{

    const reactiveFormHtml = 'Reactive Forms HTML Definitions';
    return reactiveFormHtml;

  }

  prepareTypescriptFormBuilder(formFieldDefinitionSet: FormField): string{

    const reactiveFormBuilderTypeScript = 'Reactive Form Builder Typescript';
    return reactiveFormBuilderTypeScript;

  }

  prepareTypescriptVarDeclaration(formFieldDefinitionSet: FormField): string{

    const reactiveVarDeclarationTypeScript = 'Var Declaration';
    return reactiveVarDeclarationTypeScript;

  }

  prepareTypescriptErrorMessageDeclaration(formFieldDefinitionSet: FormField): string{

    const reactiveErrorMessageDeclarationTypeScript = 'Error  Messages';
    return reactiveErrorMessageDeclarationTypeScript;

  }
}
