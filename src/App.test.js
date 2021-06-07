/*import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("inputs and renders london", async () => {
  const input = await waitFor(() =>
    screen.queryByPlaceholderText(/search and press enter.../i)
  );
  render(<App />);
  userEvent.type(input, "London{enter}");
  const addedElement = await waitFor(() => screen.getByText("London"));
  expect(addedElement).toHaveTextContent("London");
});*/
