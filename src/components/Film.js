import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_FILMS = gql`
  query {
    movies {
      title
    }
  }
`;

export const Film = () => {
  const { loading, error, data } = useQuery(GET_FILMS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Wystąpił błąd</h1>;

  return data.movies.map((film) => (
    <div key={film.title}>
      <h1>{film.title}</h1>
    </div>
  ));
};
