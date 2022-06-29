import { Suspense, lazy } from "react";
import { PageWrapper, Container, HeaderText } from "./styles";
import { usePage } from "context/page-context";
import Wizard from "components/Wizard";
import Loader from "components/Loader";
import PageControl from "components/PageControl";

const SelectGenre = lazy(
  /* webpackPrefetch: true */ () => import("components/SelectGenre")
);
const SelectSubGenre = lazy(() => import("components/SelectSubGenre"));
const AddGenre = lazy(() => import("components/AddGenre"));
const BookForm = lazy(() => import("components/BookForm"));
const Success = lazy(() => import("components/Success"));

const HomePage = () => {
  const { currentStep, createSubgenre } = usePage();

  const stepsControl = [
    {
      name: "Genre",
      step: 1,
      element: <SelectGenre />,
    },
    { name: "Subgenre", step: 2, element: <SelectSubGenre /> },
    {
      name: createSubgenre ? "Add new subgenre" : "Information",
      step: 3,
      element: createSubgenre ? <AddGenre /> : <BookForm />,
    },
    {
      name: createSubgenre ? "Information" : "success",
      step: 4,
      element: createSubgenre ? <BookForm /> : <Success />,
    },

    {
      name: "success",
      step: 5,
      element: <Success />,
    },
  ];

  const disp = stepsControl.find((item) => item.step === currentStep);

  return (
    <PageWrapper>
      <Container>
        {disp.name !== "success" && (
          <>
            <HeaderText>Add book - New book</HeaderText>
            <Wizard />
          </>
        )}

        <Suspense fallback={<Loader />}>{disp.element}</Suspense>

        {disp.name !== "success" && <PageControl page={disp.name} />}
      </Container>
    </PageWrapper>
  );
};

export default HomePage;
