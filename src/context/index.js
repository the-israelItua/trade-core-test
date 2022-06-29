import { ThemeProvider } from "styled-components";
import ErrorBoundary from "utils/error-boudary";
import { defaultTheme as theme } from "styles/theme";
import GlobalStyles from "styles/global";
import { PageProvider } from "./page-context";
import { FormProvider } from "./form-context";

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ErrorBoundary>
        <PageProvider>
          <FormProvider>{children}</FormProvider>
        </PageProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export { AppProviders };
