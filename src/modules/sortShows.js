import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
  
  const organizeByTitle = (dataArray, ascending = true) => {
    const sortedArray = [...dataArray];
    sortedArray.sort((a, b) => {
      const sortOrder = ascending ? 1 : -1;
      return a.title.localeCompare(b.title) * sortOrder;
    });
    return sortedArray;
  };
  
  // To sort in ascending order (A to Z):
  const organizedDataAsc = organizeByTitle(data);
  console.log(organizedDataAsc);
  
  // To sort in descending order (Z to A):
  const organizedDataDesc = organizeByTitle(data, false);
  console.log(organizedDataDesc);