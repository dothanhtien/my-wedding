import { useState, useEffect } from "react";

export const useImagesLoaded = (imageUrls = [], delay = 900) => {
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    if (!imageUrls.length) {
      setAllChecked(true);
      return;
    }

    const loadStates = imageUrls.map(() => ({
      imageLoaded: false,
      timerDone: false,
      errored: false,
      timerId: null,
      img: null,
    }));

    const checkAllChecked = () => {
      const done = loadStates.every(
        (state) => state.timerDone && (state.imageLoaded || state.errored)
      );
      setAllChecked((prev) => (prev !== done ? done : prev));
    };

    imageUrls.forEach((url, index) => {
      const img = new Image();
      loadStates[index].img = img;
      img.src = url;

      img.onload = () => {
        loadStates[index].imageLoaded = true;
        if (loadStates[index].timerDone) {
          checkAllChecked();
        }
      };

      img.onerror = () => {
        loadStates[index].errored = true;
        checkAllChecked();
      };

      loadStates[index].timerId = setTimeout(() => {
        loadStates[index].timerDone = true;
        checkAllChecked();
      }, delay);
    });

    return () => {
      loadStates.forEach(({ timerId, img }) => {
        if (timerId) clearTimeout(timerId);
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
  }, [imageUrls, delay]);

  return allChecked;
};
