import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppProviders } from "context";
import Page from "./index";

test("renders the correct interface to select genre", async () => {
  render(<Page />, { wrapper: AppProviders });
  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));

  expect(screen.getByText(/Add book - New book/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Back/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Next/i })).toBeInTheDocument();
  expect(screen.getByTestId("genre-list")).toBeInTheDocument();
});

test("shows error message if next is clicked before genre is selected", async () => {
  render(<Page />, { wrapper: AppProviders });

  const next = screen.getByRole("button", { name: /Next/i });

  userEvent.click(next);
  expect(screen.getByText(/Please, select a genre/i)).toBeInTheDocument();
});
