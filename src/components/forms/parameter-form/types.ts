// Propiedades de texto posibles
export type CustomTextFieldProps = {
  type: FieldTypes.TEXT
} & CommonFieldProps;

export type CustomNumericFieldProps = {
  type: FieldTypes.NUMERIC,
} & CommonFieldProps;

export type CustomEmailFieldProps = {
  type: FieldTypes.EMAIL
} & CommonFieldProps;

export type CustomPasswordFieldProps = {
  type: FieldTypes.PASSWORD
} & CommonFieldProps;

export type CustomCheckProps = {
  type: FieldTypes.CHECKBOX
} & CommonFieldProps;

export type AllPosibleTextsField = 
  CustomTextFieldProps | 
  CustomNumericFieldProps | 
  CustomEmailFieldProps | 
  CustomPasswordFieldProps | 
  CustomCheckProps 

export type CommonFieldProps = {
  title: string;
  inputName:string;
  icon?: IconOptions;
  required?: boolean;
}

export enum FieldTypes {
  TEXT = 'TEXT',
  DATE = 'DATE',
  SELECT = 'SELECT',
  PASSWORD = 'PASSWORD',
  EMAIL = 'EMAIL',
  NUMERIC = 'NUMERIC',
  CHECKBOX = 'CHECKBOX'
}

export type IconOptions = 'currency-usd';

export type TextFieldOptions = 'text' | 'date' | 'select' | 'password' | 'email' | 'checkbox' | 'numeric';

export type SelectInformation = {
  id: number;
  label: string;
}

export type InputInformation = {
  title: string;
  inputName:string;
  required?: boolean;
  type: TextFieldOptions;
  icon?: IconOptions;
  options?: SelectInformation[];
}