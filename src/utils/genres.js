import { useQuery, useMutation, queryCache } from "react-query";
import { client } from "./api-client";

const useGenres = () => {
  const { data: genres } = useQuery({
    queryKey: "genres",
    queryFn: () => client("genres").then(({ data }) => data),
  });
  return genres ?? [];
};

function useSubGenres(genreId) {
  const genres = useGenres();
  if (!genreId) {
    return [];
  }

  const selected = genres?.find((item) => item.id === genreId);
  return selected.subgenres ?? [];
}

function useCreateSubgenre(onCreateSuccess) {
  return useMutation(
    (values) => client("genres", { data: values }),
    {
      onSuccess({ data }) {
        onCreateSuccess(data);
      },
    },
    {
      onSettled: () => queryCache.invalidateQueries("genres"),
    }
  );
}

export { useGenres, useSubGenres, useCreateSubgenre };
