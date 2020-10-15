import React from "react";
import { Card, Button } from "../../components";
import { CategoriesWrapper } from "./styles";

const KItsuCategories = ({ categories }) => {
  return (
    <CategoriesWrapper>
      {categories &&
        categories?.data.map((category) => (
          <Card key={category.id}> {category.attributes.title} </Card>
        ))}
    </CategoriesWrapper>
  );
};

export default KItsuCategories;
