import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../src/features/authentication/components/LoginForm.jsx";

describe("LoginForm", () => {
  test("renders LoginForm component", () => {
    render(<LoginForm />);

    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Login");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    fireEvent.click(submitButton);

    expect(screen.getByTestId("someElement")).toBeInTheDocument();
  });
});
