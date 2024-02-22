import React, { createContext } from "react";
import all_Product from "../components/Access/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
   const contextValue = { all_product: all_Product }; // Check that all_Product is an array

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   );
};

export default ShopContextProvider;
