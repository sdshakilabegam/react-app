# Keys and Conditional Rendering

## Conditional rendering

Showing different content depending on a condition.

- if / else: used in StatusLabel.jsx to return a green or orange label.
- Ternary (condition ? A : B): used for the button text and for choosing
  the filtered list.
- && (condition && A): used to show "No projects found." only when the
  list is empty.

## Lists and keys

- map() turns an array into a list of elements.
- Every item needs a unique key so React can track which item is which
  when the list changes (for example, after filtering).
- Use a stable id (project.id), not a random value. The array index can
  cause problems if the order changes.
- Without keys, React shows a warning in the console and may update the
  list incorrectly.

## filter()

- Returns a new array with only the items that pass a test.
- Example: projects.filter((p) => p.status === 'completed')
- The original array stays unchanged.

## Example from my code

ProjectList.jsx keeps one state value (onlyCompleted). Clicking the
button flips it, and the list shows all projects or only completed ones.
