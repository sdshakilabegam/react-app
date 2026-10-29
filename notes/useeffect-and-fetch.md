# useEffect and Fetching Data

## What is useEffect?

A React hook for work outside rendering, such as fetching data. It runs
after the component appears on the page.

## Dependency array

- [] : runs once, when the component first appears.
- [x] : runs once, then again whenever x changes.
- no array: runs after every render (risky if it sets state, can loop).

## Fetching data (UserList.jsx)

- fetch(url) requests data; await waits for the answer.
- response.ok checks that the server replied successfully.
- response.json() converts the reply into JavaScript data.
- setUsers(data) saves it in state, so the list re-renders.

## Loading and error states

- loading: true at the start, false in finally.
- error: null at the start, set in catch with the error message.
- try / catch / finally handles success, failure and cleanup.
- The screen shows "Loading...", an error message, or the list.

## Example from my code

UserList.jsx fetches 10 users from jsonplaceholder.typicode.com/users
once, shows Loading while waiting, shows an error if the request fails,
and renders the users with map() and unique keys.
