import { useEffect } from "react";
import { useFormValues } from "../../context/form-context";
import TextInput from "../Input";
import { ErrorMessage } from "components/ErrorMessage";
import { FooterWrapper, FooterText } from "./styles";

const AddGenre = () => {
  const { formValues, newSubgenreValues, updateNewSubgenreValues, formErrors } =
    useFormValues();

  useEffect(() => {
    updateNewSubgenreValues({ key: "genreId", value: formValues.genre });
  }, [formValues.genre, updateNewSubgenreValues]);

  return (
    <div>
      <TextInput
        placeholder="Subgenre name"
        value={newSubgenreValues.name}
        onChange={({ target }) =>
          updateNewSubgenreValues({ key: "name", value: target.value })
        }
        autoFocus
      />
      <FooterWrapper>
        <input
          type="checkbox"
          checked={newSubgenreValues.isDescriptionRequired}
          onChange={({ target }) =>
            updateNewSubgenreValues({
              key: "isDescriptionRequired",
              value: target.checked,
            })
          }
        />
        <FooterText>Description is required for this subgenre</FooterText>
      </FooterWrapper>
      <ErrorMessage>{formErrors.subgenre}</ErrorMessage>
    </div>
  );
};

export default AddGenre;
