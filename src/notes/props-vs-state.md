# Props vs State

## Props

- Data passed from a parent component to a child.
- Read-only: the child cannot change them.
- Example from my code: in App.jsx I pass
  <Badge label="HTML" color="#e34f26" /> and Badge only displays them.

## State

- Data that belongs to the component and changes over time.
- Created with useState and changed only with its setter function.
- Changing state re-renders the component, so the page updates.
- Example from my code: in Counter.jsx
  const [count, setCount] = useState(0);
  Clicking Increase calls setCount(count + 1) and the number changes.

## Props vs normal variable vs state

- Normal variable: changing it does not update the page.
- Props: come from the parent, cannot be changed by the child.
- State: owned by the component, changes update the page.

## Summary

Props = what a component is given. State = what a component remembers
and can change.
