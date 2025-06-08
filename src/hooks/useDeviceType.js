import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  const updateDeviceType = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setDeviceType({ isMobile: true, isTablet: false, isDesktop: false });
    } else if (width < 1024) {
      setDeviceType({ isMobile: false, isTablet: true, isDesktop: false });
    } else {
      setDeviceType({ isMobile: false, isTablet: false, isDesktop: true });
    }
  };

  useEffect(() => {
    const parser = new UAParser();
    const result = parser.getResult();
    const type = result.device.type;

    if (type === "mobile") {
      setDeviceType({ isMobile: true, isTablet: false, isDesktop: false });
    } else if (type === "tablet") {
      setDeviceType({ isMobile: false, isTablet: true, isDesktop: false });
    } else {
      updateDeviceType();
    }

    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return deviceType;
};
