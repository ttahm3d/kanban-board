import { render, screen } from "@testing-library/react";
import App from "./App";

test('Renders "Kanban Board" Text', () => {
  render(<App />);
  const heading = screen.getByText(/Kanban Board/i);
  expect(heading).toBeInTheDocument();
});

test("Renders three buckets", () => {
  render(<App />);
});
