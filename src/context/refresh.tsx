import React, { createContext, useState, FC, ReactNode } from "react";

interface CheckRefreshContextProps {
  children: ReactNode;
}

interface CheckRefreshContextValue {
  isRefreshed: boolean;
  changeRefresh: () => void;
}

const checkRefreshContextDefaultValues: CheckRefreshContextValue = {
  isRefreshed: true,
  // eslint-disable-next-line no-empty-function, @typescript-eslint/no-empty-function
  changeRefresh: () => {},
};

export const CheckRefreshContext = createContext(
  checkRefreshContextDefaultValues
);

const CheckRefreshContextProvider: FC<CheckRefreshContextProps> = ({
  children,
}) => {
  const [isRefreshed, setIsRefreshed] = useState(true);

  const changeRefresh = () => setIsRefreshed(false);

  const value = { isRefreshed, changeRefresh };

  return (
    <CheckRefreshContext.Provider value={value}>
      {children}
    </CheckRefreshContext.Provider>
  );
};

export default CheckRefreshContextProvider;
