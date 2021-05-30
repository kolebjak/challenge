import React, { useState } from 'react'
import './App.css';
import { isLeft, isRight } from './utils/either'
import FormControl from './components/FormControl'
import Form from './components/Form'
import useUsers from './utils/useUsers'
import { postJSON } from './utils/fetcher'

interface IFormValues {
  userId: number;
  title: string;
  body: string;
  [key: string]: string | number;
}

const App = (): JSX.Element => {
  const users = useUsers();
  const [isPosting, setIsPosting] = useState(false);
  const [message, setMessage] = useState<string>();

  const handleSubmit = async (values: IFormValues) => {
    setIsPosting(true);
    const response = await postJSON('https://jsonplaceholder.typicode.com/posts', values);
    setIsPosting(false);

    if(isLeft(response)) {
      return setMessage(`Unable to send data: ${response.value}.`);
    }

    return setMessage(`Successfully submitted. Response: ${JSON.stringify(response.value)}`);
  }

  const handleValidation = (values: IFormValues) => {
    let errs = {};
    if(!values.userId) {
      errs = { ...errs, userId: 'Please select a user.'}
    }

    if(!values.title) {
      errs = { ...errs, title: 'Title is required.'}
    }

    if(!values.body) {
      errs = { ...errs, body: 'Body is required.'}
    }

    return errs;
  }

  if(users.isLoading) {
    return <div>loading...</div>
  }

  if(isLeft(users.result)) {
    return <div>{users.result.value}</div>
  }

  const options = isRight(users.result) ? users.result.value.map(u => ({ value: u.id, label: u.name })) : [];

  return (
    <div className="App">
      {message && <div className="message">{message}</div>}
      <Form<IFormValues> onSubmit={handleSubmit} validation={handleValidation}>
        <FormControl
          name="userId"
          type="select"
          label="Users:"
          options={options}
        />
        <FormControl
          name="title"
          type="text"
          label="Title:"
        />
        <FormControl
          name="body"
          type="text"
          label="Body:"
        />
        <button disabled={isPosting} type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default App;
