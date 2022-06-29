import { createContext, useContext, useState } from "react";

const PageContext = createContext();
PageContext.displayName = "PageContext";

const initPages = [
  {
    step: 1,
    label: "Genre",
  },
  {
    step: 2,
    label: "Subgenre",
  },
];
const PageProvider = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [createSubgenre, setCreateSubgenre] = useState(false);
  const [pagelist, setPagelist] = useState(initPages);

  const setInitPages = () => setPagelist(initPages);

  const setCreatingPages = () =>
    setPagelist((pagelist) => [
      ...pagelist,
      {
        step: 3,
        label: "Add new subgenre",
      },
      {
        step: 4,
        label: "Information",
      },
    ]);

  const setNotCreatingPages = () =>
    setPagelist((pagelist) => [
      ...pagelist,
      {
        step: 3,
        label: "Information",
      },
    ]);

  return (
    <PageContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        createSubgenre,
        setCreateSubgenre,
        pagelist,
        setInitPages,
        setCreatingPages,
        setNotCreatingPages,
      }}
      {...props}
    />
  );
};

const usePage = () => {
  const context = useContext(PageContext);

  if (context === undefined) {
    throw new Error(`usePage must be used within a PageProvider`);
  }

  return context;
};

export { PageProvider, usePage };
