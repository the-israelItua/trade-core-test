import { useGenres } from "../../utils/genres";
import { useFormValues } from "context/form-context";
import { List } from "../List";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage";

const SelectGenres = () => {
  const genres = useGenres();
  const { formValues, updateFormValues, formErrors } = useFormValues();
  return (
    <>
      <List data-testid="genre-list">
        {genres?.map((item) => (
          <Button
            key={item.id}
            onClick={() => updateFormValues({ key: "genre", value: item.id })}
            active={formValues?.genre === item.id}
          >
            {item.name}
          </Button>
        ))}
      </List>

      <ErrorMessage>{formErrors.genre}</ErrorMessage>
    </>
  );
};

export default SelectGenres;
