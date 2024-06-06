import { defineConfig } from "orval";

export default defineConfig({
  all: {
    output: {
      mode: "split",
      target: "api/endpoints/genAll.ts",
      schemas: "api/model",
      client: "react-query",
      prettier: true,
      override: {
        query: {
          useQuery: true,
          useSuspenseQuery: true,
          usePrefetch: true,
          options: {
            staleTime: 1000 * 30,
          },
        },
        mutator: {
          path: "./api/custom-instance.ts",
          name: "customInstance",
        },
      },
    },
    input: {
      target: "http://localhost:4000/api-yaml",
    },
  },
});
