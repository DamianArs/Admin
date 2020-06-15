import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title, List, Datagrid, TextField, ShowButton } from "react-admin";

const GET_FILMS = gql`
  query {
    movies {
      id
      title
    }
  }
`;

export const ListGraph = (props) => {
  const { loading, error, data } = useQuery(GET_FILMS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Wystąpił błąd</h1>;

  return data.movies.map((film) => {
    return (
      <Card>
        <p>{film.id}</p>
        <h1>{film.title}</h1>
      </Card>
    );
  });
};
