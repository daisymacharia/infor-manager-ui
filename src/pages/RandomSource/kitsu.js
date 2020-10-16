import React from "react";
import { TabsComponent } from "../../components";
import { CategoriesWrapper } from "./styles";

const KItsuCategories = ({ categories }) => {
  return (
    <CategoriesWrapper>
      {categories && <TabsComponent categories={categories?.data} />}
    </CategoriesWrapper>
  );
};

export default KItsuCategories;
