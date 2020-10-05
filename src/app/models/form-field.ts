import { FormFieldElementType } from '../helpers/form-field-element-type-enum';
import { ValidatorType } from '../helpers/validator-type.enum';

export class FormField{
  fieldDefinitionName: string;
  formElementType: FormFieldElementType;
  formControlDefinition: string;
  formPlaceHolderDefinition: string;
  formFieldValidators: ValidatorType[] = [];
  formFieldClassName: string;
}
