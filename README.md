# Overview

There is no time limit to completing this exercise, however, we recommend you aim to spend in the region of 2 hours on it. Once you have finished - and are happy with your solution - push your work back up to the github repository (in a branch). The task will involve you implementing a form using React. Please make sure code is committed and pushed.

# Preparation

You will need:

- Node v12+
- Git 
- A text editor or IDE

# Task

- Create a branch from `master`.
- Create a React application.
- Create a component as a Form Control:
  - The control should accept a label.
  - The control should accept a validation function with configurable error message.
  - The control can be incorporated inside a `<form>` and the selected option pushed up to the form.
  - The control should fire an event on change.
- Use the component you made in the previous step to create a form:

  - Call this `https://jsonplaceholder.typicode.com/users` to populate list of the users. `name` should be displayed while `id` should be saved as the value in the `form`.
  - Add the required validation with the `Please select a user` error message.
  - Add 2 text fields, one for `title` and one for `body` both with required validation.
  - On submit of the form create a new post by sending the data to `https://jsonplaceholder.typicode.com/posts`. The request interface will look like:

  ```json
  {
    "title": "foo",
    "body": "bar",
    "userId": 1
  }
  ```
- When you are finished raise a PR for your changes.

  ## Bonus points

  - Handle the error when any of the HTTP requests fails by displaying appropriate error message to the user.
  - Make sure the form control you have created is meeting WCAG AA level.
  - Writing unit tests for your component.
  - Writing e2e tests for your form.
  - Writing statically typed code ([typescript](https://www.typescriptlang.org/) or [flow](https://flow.org/)).
  - Wrapping REST endpoints with GraphQL (e.g. [apollo-link-rest](https://github.com/apollographql/apollo-link-rest)) 


