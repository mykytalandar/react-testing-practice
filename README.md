# React Testing Library Practice

A learning project focused on testing React applications using **Vitest**, **React Testing Library** and **Playwright**.

The project contains practical examples of testing React components, user interactions, asynchronous operations, API requests and end-to-end (E2E) tests.

## Tech Stack

* React
* TypeScript
* Vitest
* React Testing Library
* Testing Library Vitest DOM
* Testing Library User Event
* Playwright
* Axios
* Tailwind CSS

## Testing Topics

This project covers the following testing concepts:

* Rendering React components
* Finding elements with Testing Library queries
* Testing user interactions
* Testing input events
* Testing component state changes
* Testing asynchronous operations
* Testing API requests
* Mocking Axios requests with Vitest
* Testing loading and loaded states
* Testing rendered API data
* Vitest mocks and mock functions
* End-to-end (E2E) navigation and routing testing with Playwright

## Examples

### Component Rendering

Testing whether React components render the expected elements and content.

### User Interactions

Testing user actions such as:

* clicking buttons
* entering text into inputs
* changing input values

### Asynchronous Operations

Testing components that load data asynchronously and updating the UI after receiving a response.

### API Mocking

Axios requests are mocked with Vitest so tests do not depend on a real API response.

Example:

```typescript
vitest.mock("axios");

vitest.mocked(axios.get).mockResolvedValue({
  data: [
    {
      id: 1,
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
  ],
});
```

This allows the test to control the API response and verify how the component behaves.

## Running the Project

Clone the repository:

```bash
git clone https://github.com/mykytalandar/react-testing.git
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Run unit tests:

```bash
npm test
```

Run Playwright tests:

```bash
npx playwright test
```

## Purpose

The main purpose of this project is to gain practical experience with React Testing Library, Vitest, and Playwright and understand how to test React applications from both unit/component and end-to-end perspectives.

The project is part of my frontend development learning path.
