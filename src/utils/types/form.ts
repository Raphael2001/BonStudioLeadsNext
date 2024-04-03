import { HTMLInputTypeAttribute } from "react";

export interface FormDataType {
  inputs: Array<FormInputData>;
  onSubmit: (payload: Object) => void;
  buttonText: string;
  initialData?: Object;
}

export interface FormInputData {
  name: string;
  label: string;
  inputType: string;
  options?: Array<any>;
  rules: Array<string>;
  field?: string;
  isDisabled?: boolean;
  rows?: number;
  type?: HTMLInputTypeAttribute;
  accept?: string;
}
