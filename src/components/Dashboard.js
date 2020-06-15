import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_FILMS = gql`
  query {
    movie(id: 2) {
      title
    }
  }
`;

export const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_FILMS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Wystąpił błąd</h1>;

  return (
    <div>
      <h1>{data.movie.title}</h1>
    </div>
  );
};
