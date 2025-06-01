import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UAParser } from "ua-parser-js";
import CryptoJS from "crypto-js";

const useTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.location.hostname === "localhost") return;

    const sendToSheet = async () => {
      try {
        const ipRes = await fetch(
          `https://ipinfo.io/json?token=${import.meta.env.VITE_IP_INFO_TOKEN}`
        );
        const ipData = await ipRes.json();

        const parser = new UAParser();
        const device = parser.getResult();

        const secret = import.meta.env.VITE_APP_SCRIPT_SECRET;

        const signature = CryptoJS.HmacSHA256("signature", secret).toString();

        const payload = {
          ip: ipData.ip,
          country: ipData.country,
          city: ipData.city,
          browser: device.browser.name,
          os: device.os.name,
          deviceType: device.device.type || "desktop",
          pathname: location.pathname,
          signature,
        };

        await fetch(import.meta.env.VITE_APP_SCRIPT_TRACKING_URL, {
          redirect: "follow",
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        });
      } catch (error) {
        console.error("Tracking failed:", error);
      }
    };

    sendToSheet();
  }, [location.pathname]);
};

export default useTracker;
