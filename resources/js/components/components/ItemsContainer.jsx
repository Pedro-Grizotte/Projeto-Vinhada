import React from "react";
import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";

const ItemsContainer = () => {
  return <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10">
    <Item links={PRODUCTS} title="Products" />
    <Item links={RESOURCES} title="Resources" />
    <Item links={COMPANY} title="Company" />
    <Item links={SUPPORT} title="Support" />
  </div>;
}

export default ItemsContainer;