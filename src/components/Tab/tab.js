import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Anime from "../Anime/anime";

const TabsComponent = ({ categories }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        {categories.map((category) => (
          <Tab key={category.id}>{category.attributes.title}</Tab>
        ))}
      </TabList>
      {categories.map((category) => (
        <TabPanel key={category.id}>
          <Anime category={category.attributes.slug} />
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabsComponent;
