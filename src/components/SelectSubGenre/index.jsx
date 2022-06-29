import { useState, useEffect } from "react";
import { usePage } from "context/page-context";
import { useFormValues } from "context/form-context";
import { useGenres } from "utils/genres";
import { findById } from "utils/misc";
import { List } from "../List";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";

const SelectSubGenre = () => {
  const [subgenres, setSubGenres] = useState([]);

  const { setCurrentStep, setCreateSubgenre, setCreatingPages } = usePage();
  const { formValues, updateFormValues, formErrors } = useFormValues();

  const genres = useGenres();

  useEffect(() => {
    if (!formValues.genre) {
      return;
    }
    const selected = findById(genres, formValues.genre);
    setSubGenres(selected?.subgenres ?? []);
  }, [formValues.genre, genres]);

  const handleAddNew = () => {
    setCreateSubgenre(true);
    setCurrentStep(3);
    setCreatingPages();
  };

  return (
    <>
      <List>
        {subgenres?.map((item) => (
          <Button
            key={item.id}
            onClick={() => updateFormValues({ key: "subgenre", value: item })}
            active={formValues.subgenre?.id === item.id}
          >
            {item.name}
          </Button>
        ))}

        <Button active onClick={handleAddNew}>
          Add new
        </Button>
      </List>

      <ErrorMessage>{formErrors.subgenre}</ErrorMessage>
    </>
  );
};

export default SelectSubGenre;
