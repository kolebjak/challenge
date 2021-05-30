import React, { useEffect } from 'react'

interface ITextControl {
  label: string;
  type: 'text'
  onChange: (value: string) => void;
  value?: string;
  errorMessage?: string;
}

interface IOption {
  label: string;
  value: number;
}

interface ISelectControl {
  label: string;
  type: 'select';
  options: IOption[];
  onChange: (value: IOption['value']) => void;
  value?: IOption['value'];
  errorMessage?: string;
}

type Props = ISelectControl | ITextControl;
const isText = (props: Props): props is ITextControl => props.type === 'text';
const isSelect = (props: Props): props is ISelectControl => props.type === 'select';

const FormControl = (props: Props): JSX.Element => {
  const { label, value, errorMessage } = props;

  return (
    <div className="formControl">
      <label>{label}</label>
      {isText(props) && (
        <input
          data-testid="formControl-input"
          onChange={(e) => props.onChange(e.target.value)}
          value={value || ''}
        />
      )}
      {isSelect(props) && (
        <select
          data-testid="formControl-select"
          onChange={(c) => props.onChange(Number(c.target.value))}
          value={value || ''}
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
