# Controlled Inputs in React

## What is a controlled input?

An input whose value is stored in React state. The input shows the state
value, and every change updates the state.

## How it works

- value={formData.name}: the input displays what is in state.
- onChange={handleChange}: on every key typed, the handler updates state.
- State changes re-render the component, so the input shows the new value.
- React is the single source of truth, not the browser.

## Handling many inputs with one handler

- Each input has a name that matches a key in formData.
- setFormData({ ...formData, [name]: value }) copies the old data and
  updates only the changed field.

## Form submission

- onSubmit runs when the form is submitted.
- event.preventDefault() stops the page from reloading.
- validate() checks required fields, minimum length and email format.
- Errors are stored in state and shown under each input.
- If there are no errors, the data is saved in state and shown below the
  form.

## Example from my code

ContactForm.jsx has three controlled inputs (name, email, message),
validation with error messages, and a box that shows the submitted data.
