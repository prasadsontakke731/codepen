import { createContext, useState } from 'react';

export const DataContext = createContext(null);
console.log(DataContext);

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState('');
  const [js, setJs] = useState('');
  const [css, setCss] = useState('');

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
