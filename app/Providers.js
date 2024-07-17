"use client";

import { useRef, useEffect, useState } from "react";
import { Provider } from "react-redux";
import makeStore from "@/store/store";

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (!storeRef.current) {
      // retrieve initial state from local storage if already available
      const initialState = localStorage.getItem("reduxState")
        ? JSON.parse(localStorage.getItem("reduxState"))
        : {};
      storeRef.current = makeStore(initialState);
    }

    setIsHydrated(true);
  }, []);

  // fix hyradtion issue
  if (!isHydrated) {
    return null;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
