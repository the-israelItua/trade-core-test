import { FiChevronLeft } from "react-icons/fi";
import { useFormValues } from "context/form-context";
import { usePage } from "context/page-context";
import { useCreateSubgenre } from "utils/genres";
import { useAddBook } from "utils/book";
import { Button } from "../Button";
import { ControlWrapper } from "./styles";

const PageControl = ({ page }) => {
  const {
    currentStep,
    setCurrentStep,
    setCreateSubgenre,
    createSubgenre,
    setInitPages,
    setNotCreatingPages,
  } = usePage();

  const {
    formValues,
    updateFormValues,
    clearFormValues,
    updateFormErrors,
    clearNewSubgenreValues,
    newSubgenreValues,
  } = useFormValues();

  const onCreateSubgenreSuccess = (newItem) => {
    updateFormValues({ key: "subgenre", value: newItem });
    clearNewSubgenreValues();
  };

  const onAddBookSuccess = () => {
    clearFormValues();
    setCurrentStep(currentStep + 1);
  };

  const [create] = useCreateSubgenre(onCreateSubgenreSuccess);

  const [addbook] = useAddBook(onAddBookSuccess);

  const handleBack = () => {
    setCurrentStep(1);
    setInitPages();
    setCreateSubgenre(false);
  };

  const handleGenreSelected = () => {
    if (!formValues.genre) {
      updateFormErrors({ key: "genre", value: "Please, select a genre" });
      return;
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubGenreSelected = () => {
    if (!formValues.subgenre?.id) {
      updateFormErrors({ key: "subgenre", value: "Please, select a subgenre" });
      return;
    }

    setCurrentStep(currentStep + 1);
    setNotCreatingPages();
  };

  const handleCreateNewSubGenre = () => {
    if (newSubgenreValues.name === "") {
      updateFormErrors({
        key: "subgenre",
        value: "Please, enter subgenre name",
      });
      return;
    }
    create(newSubgenreValues);
    setCurrentStep(currentStep + 1);
  };

  const handleAddBook = () => {
    if (!formValues.title) {
      updateFormErrors({ key: "title", value: "Title is required" });
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    if (formValues?.subgenre.isDescriptionRequired && !formValues.description) {
      updateFormErrors({
        key: "description",
        value: "Description is required",
      });
      return;
    }

    addbook(formValues);
    setCreateSubgenre(false);
  };

  const handleNext = () => {
    if (currentStep === 1) {
      handleGenreSelected();
    } else if (currentStep === 2) {
      handleSubGenreSelected();
    } else if (currentStep === 3 && createSubgenre) {
      handleCreateNewSubGenre();
    } else if (currentStep === 3 && !createSubgenre) {
      handleAddBook();
    } else if (currentStep === 4 && createSubgenre) {
      handleAddBook();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <ControlWrapper>
      <Button onClick={handleBack}>
        <FiChevronLeft size={20} />
        Back
      </Button>
      <Button active onClick={handleNext}>
        {page !== "Information" ? "Next" : "Add"}
      </Button>
    </ControlWrapper>
  );
};

export default PageControl;
