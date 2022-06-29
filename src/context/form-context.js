import { useReducer, createContext, useContext, useCallback } from "react";

const FormContext = createContext();
FormContext.displayName = "FormContext";

const initialFormValues = {
  genre: null,
  subgenre: null,
  title: "",
  author: "",
  isbn: "",
  publisher: "",
  date_published: null,
  num_of_pages: "",
  format: "",
  edition: "",
  language: "",
  description: "",
};

const initialFormErrors = {
  genre: null,
  subgenre: null,
  title: null,
  description: null,
};

const initialSubValues = {
  genreId: null,
  name: "",
  isDescriptionRequired: false,
};

const FormProvider = (props) => {
  const [formValues, setFormValues] = useReducer(
    (currentVals, newVals) => ({ ...currentVals, ...newVals }),
    initialFormValues
  );

  const [formErrors, setFormErrors] = useReducer(
    (currentVals, newVals) => ({ ...currentVals, ...newVals }),
    initialFormErrors
  );

  const [newSubgenreValues, setNewSubgenreValues] = useReducer(
    (currentVals, newVals) => ({ ...currentVals, ...newVals }),
    initialSubValues
  );

  const updateFormErrors = ({ key, value }) => {
    setFormErrors({ [key]: value });
  };

  const updateFormValues = ({ key, value }) => {
    setFormValues({ [key]: value });
    if (["genre", "subgenre", "title", "description"].includes(key)) {
      setFormErrors({ [key]: null });
    }
  };

  const clearFormValues = () => {
    setFormValues({ ...initialFormValues });
  };

  const updateNewSubgenreValues = useCallback(({ key, value }) => {
    if (key === "name") {
      setFormErrors({ subgenre: null });
    }
    setNewSubgenreValues({ [key]: value });
  }, []);

  const clearNewSubgenreValues = () => {
    setNewSubgenreValues({ ...initialSubValues });
  };

  return (
    <FormContext.Provider
      value={{
        formValues,
        updateFormValues,
        clearFormValues,
        formErrors,
        updateFormErrors,
        newSubgenreValues,
        updateNewSubgenreValues,
        clearNewSubgenreValues,
      }}
      {...props}
    />
  );
};

const useFormValues = () => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error(`useFormValues must be used within a FormProvider`);
  }

  return context;
};

export { FormProvider, useFormValues };
