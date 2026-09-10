import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export const getData = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (build) => ({
        getProject: build.query<Post[], void>({
            query: () => "/posts",
        }),
    }),
});

export const { useGetProjectQuery } = getData;
