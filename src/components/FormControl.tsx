import React, { useContext } from 'react'
import { FormContext } from './Form'

interface ITextControl {
  name: string;
  label: string;
  type: 'text'
}

interface IOption {
  label: string;
  value: number;
}

interface ISelectControl {
  name: string;
  label: string;
  type: 'select';
  options: IOption[];
}

type Props = ISelectControl | ITextControl;
const isText = (props: Props): props is ITextControl => props.type === 'text';
const isSelect = (props: Props): props is ISelectControl => props.type === 'select';

const FormControl = (props: Props): JSX.Element => {
  const form = useContext(FormContext);
  const { label, name } = props;

  const value = form?.getValue?.(name) || '';
  const errorMessage = form?.getErrorMessage?.(name);

  return (
    <div className="formControl">
      <label>{label}</label>
      {isText(props) && (
        <input
          data-testid="formControl-input"
          onChange={(e) => form?.onChange?.(name, e.target.value)}
          value={value}
        />
      )}
      {isSelect(props) && (
        <select
          data-testid="formControl-select"
          onChange={(c) => form?.onChange?.(name, Number(c.target.value))}
          value={value}
        >
          <option value="" disabled={true}>Select user</option>
          {props.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)};
        </select>
      )}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    </div>
  )
}

export default FormControl;
