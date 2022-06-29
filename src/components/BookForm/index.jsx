import { useFormValues } from "../../context/form-context";
import {
  authorData,
  publishersData,
  formatData,
  languageData,
} from "utils/data";
import { FormWrapper, FormGroup } from "./styles";
import SelectField from "../SelectField";
import TextInput from "../Input";
import DatePicker from "../DatePicker";
import TextArea from "../Input/TextArea";

const BookForm = () => {
  const { formValues, updateFormValues, formErrors } = useFormValues();

  return (
    <FormWrapper>
      <TextInput
        label="Book title"
        placeholder="Book title"
        value={formValues.title}
        onChange={({ target }) =>
          updateFormValues({ key: "title", value: target.value })
        }
        error={formErrors.title}
        autoFocus
      />
      <SelectField
        label="Author"
        placeholder="Author"
        options={authorData}
        value={formValues.author}
        onSelect={(value) => updateFormValues({ key: "author", value })}
      />
      <TextInput
        label="ISBN"
        placeholder="ISBN"
        value={formValues.isbn}
        onChange={({ target }) =>
          updateFormValues({ key: "isbn", value: target.value })
        }
      />
      <SelectField
        label="Publisher"
        placeholder="Publisher"
        options={publishersData}
        value={formValues.publisher}
        onSelect={(value) => updateFormValues({ key: "publisher", value })}
      />
      <DatePicker
        label="Date published"
        date={formValues.date_published}
        onDateChange={(date) =>
          updateFormValues({ key: "date_published", value: date })
        }
      />
      <TextInput
        label="Number of pages"
        placeholder="Number of pages"
        width="30%"
        type="number"
        value={formValues.num_of_pages}
        onChange={({ target }) =>
          updateFormValues({ key: "num_of_pages", value: target.value })
        }
      />
      <SelectField
        label="Format"
        placeholder="Format"
        options={formatData}
        value={formValues.format}
        onSelect={(value) => updateFormValues({ key: "format", value })}
        width="40%"
      />

      <FormGroup>
        <TextInput
          label="Edition"
          placeholder="Edition"
          width="40%"
          value={formValues.edition}
          onChange={({ target }) =>
            updateFormValues({ key: "edition", value: target.value })
          }
        />
        <SelectField
          label="Edition Language"
          placeholder="Edition Language"
          options={languageData}
          onSelect={(value) => updateFormValues({ key: "language", value })}
          width="40%"
        />
      </FormGroup>
      <TextArea
        label="Description"
        placeholder="Type the description"
        value={formValues.description}
        onChange={({ target }) =>
          updateFormValues({ key: "description", value: target.value })
        }
        error={formErrors.description}
      />
    </FormWrapper>
  );
};

export default BookForm;
