import { useEffect, useRef } from "react";

function AutoPlayAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current?.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/assets/audios/NamLayTayAnh.mp3"
      preload="auto"
      loop
    />
  );
}

export default AutoPlayAudio;
