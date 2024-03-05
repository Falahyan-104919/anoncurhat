import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@/App";

test("renders App component", () => {
  render(
    <Router>
      <App />
    </Router>
  );

  expect(screen.getByText("Your Text Here")).toBeInTheDocument();
});
