import { useQuery } from "@tanstack/react-query";
import { getFilterdResults } from "../../api/jsonAPI";
import useAuthStore from "../auth/useAuthStore";


export const usePublicResults = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["publicResults"],
    queryFn: () => getFilterdResults("resultsTable", "onPublic", true),
  });

  return { data, isLoading, error };
};

export const useMyResults = () => {
  const { user } = useAuthStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["myResults"],
    queryFn: () => getFilterdResults(
      "resultsTable",
      "user.userId",
      user.userId
    ),
  });

  return { data, isLoading, error };
};

