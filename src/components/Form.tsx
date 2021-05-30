import React, { FormEvent, ReactNode, useEffect, useState } from 'react'

interface IChildrenProps<TValues> {
  values: TValues;
  onChange: (name: string) => (value: string | number) => void;
  errorMessages: { [key: string]: string };
}

interface IProps<TValues> {
  onSubmit: (values: TValues) => void;
  children: (childrenProps: IChildrenProps<TValues>) => ReactNode | ReactNode[];
  validation: (values: TValues) => { [key: string]: string }
}

const Form = <TValues extends {}>({ children, onSubmit, validation }: IProps<TValues>) => {
  const [values, setValues] = useState<TValues>({} as TValues);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const em = validation(values);
    setErrorMessages(em);
  }, [values])

  const onChange: IChildrenProps<TValues>['onChange'] = (name) => (value) => {
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!Object.keys(errorMessages).length) {
      onSubmit(values);
    }
  }

  return (
    <form onSubmit={handleSubmit}>{children({ onChange, values, errorMessages })}</form>
  );
}

export default Form;
