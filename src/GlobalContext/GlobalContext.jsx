import React, { createContext, useState, useEffect } from 'react';


export const GlobalContext = createContext();

// Create the Custom Provider
export const GlobalProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    authenticated: false,
    userData: null,
    allShows: null,
    singleShow: null,
  });


    useEffect(() => {
        async function getAllShows() {
          try {
            const response = await fetch('https://candid-cocada-e08649.netlify.app/');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const podcasts = await response.json();
            setGlobalData((prevState) => ({
              ...prevState,
              allShows: podcasts,
            }));
          } catch (error) {
            console.error('Error in getAllShows:', error);
            throw error;
          }
        };
      
        getAllShows()
          
      }, []);
 
  return (
    <GlobalContext.Provider value={[globalData, setGlobalData]}>
      {children}
    </GlobalContext.Provider>
  );
};
