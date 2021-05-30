import React, { createContext, FormEvent, ReactNode, useEffect, useState } from 'react'

export type FormValues = { [key: string]: string | number }
export type ErrorMessages = { [key: string]: string }

interface IFormContext {
  onChange: (name: string, value: string | number) => void;
  getValue: (name: string) => string | number | undefined;
  getErrorMessage: (name: string) => string | undefined;
}

interface IProps<TFormValues> {
  onSubmit: (values: TFormValues) => void;
  children: ReactNode | ReactNode[];
  validation: (values: TFormValues) => { [key: string]: string }
}

export const FormContext = createContext<Partial<IFormContext>>({});

const Form = <TFormValues extends FormValues>({ children, onSubmit, validation }: IProps<TFormValues>) => {
  const [values, setValues] = useState<TFormValues>({} as TFormValues);
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  useEffect(() => {
    const em = validation(values);
    setErrorMessages(em);
  }, [values, validation])

  const onChange: IFormContext['onChange'] = (name, value) => {
    setValues({ ...values, [name]: value });
  }

  const getValue: IFormContext['getValue'] = (name) => values[name];
  const getErrorMessage: IFormContext['getErrorMessage'] = (name) => errorMessages[name];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!Object.keys(errorMessages).length) {
      onSubmit(values);
    }
  }

  return (
    <FormContext.Provider
      value={{
        getValue,
        onChange,
        getErrorMessage,
      }}
    >
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
}

export default Form;
