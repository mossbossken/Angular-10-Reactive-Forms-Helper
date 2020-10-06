import { FormFieldElementType } from '../helpers/form-field-element-type-enum';
import { ValidatorType } from '../helpers/validator-type.enum';

export class FormField{
  formElementType: FormFieldElementType;
  formControlName: string;
  formPlaceHolderName: string;
  formFieldValidators: ValidatorType[] = [];
  formCssClassName: string;
}
