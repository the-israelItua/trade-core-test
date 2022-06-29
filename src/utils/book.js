import { useMutation } from "react-query";
import { client } from "../utils/api-client";

function useAddBook(onAddBookSuccess) {
  return useMutation((values) => client("books", { data: values }), {
    onMutate(newBook) {
      onAddBookSuccess(newBook);
    },
  });
}

export { useAddBook };
