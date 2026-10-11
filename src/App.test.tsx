import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);

    // Пошук DOM-елемента за унікальним атрибутом data-testid
    // Querying the DOM element by its unique data-testid attribute
    const button = screen.getByTestId("click-btn");

    // Отримання поля введення за значенням його placeholder (без урахування регістру)
    // Retrieving an input field by its placeholder text (case-insensitive)
    const input = screen.getByPlaceholderText(/type here/i);

    // Перевірка наявності елемента з певним текстовим вмістом у DOM-дереві
    // Verifying the presence of an element with specific text content in the DOM tree
    expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();

    // Перевірка наявності елемента в поточному DOM-дереві
    // Verifying the presence of the element in the current DOM tree
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("input event", async () => {
    render(<App />);
    const valueElement = screen.getByTestId("value-elem");
    const input = screen.getByPlaceholderText(/Type here.../i);

    // Перевірка того, що елемент не містить текстового вмісту (його вміст є порожнім)
    // Verifying that the element does not contain any text content (its text is empty)
    expect(valueElement).toHaveTextContent("");

    // fireEvent.change(input, {
    //   target: { value: '12345' }
    // })
    await userEvent.type(input, "12345");

    // Отримання значення елемента та його порівняння з очікуваним числовим рядком
    // Retrieving the element's value and comparing it against the expected numeric string
    expect(valueElement).toHaveTextContent("12345");
  });
});
