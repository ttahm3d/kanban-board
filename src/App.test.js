import { render, screen } from "@testing-library/react";
import App from "./App";

test('Renders "Kanban Board" Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kanban Board/i);
  expect(linkElement).toBeInTheDocument();
});
