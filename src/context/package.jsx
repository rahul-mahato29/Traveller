import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({Children}) => {
    const [data, setData] = useState({name : ''});

    return (
        <DataContext.Provider value={{data, setData}}>
            {Children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);