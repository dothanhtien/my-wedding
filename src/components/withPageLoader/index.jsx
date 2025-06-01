import React, { useEffect, useState } from "react";
import HeartLoading from "../icons/heartLoading";

// eslint-disable-next-line no-unused-vars
const withPageLoader = (Component) => {
  const WithPageLoader = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1800);

      return () => clearTimeout(timer);
    }, []);

    return loading ? <HeartLoading /> : <Component {...props} />;
  };

  return WithPageLoader;
};

export default withPageLoader;
