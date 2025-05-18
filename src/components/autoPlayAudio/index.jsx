import { useEffect, useRef, useState } from "react";
import { AutoPlayAudioStyledWrapper } from "./style";

function AutoPlayAudio() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playAudio = () => {
      const audio = audioRef.current;
      if (audio) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            document.removeEventListener("click", playAudio);
          })
          .catch((err) => {
            console.warn("Autoplay failed:", err);
          });
      }
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(console.warn);
    }
  };

  return (
    <AutoPlayAudioStyledWrapper>
      <audio
        ref={audioRef}
        src="/my-wedding/assets/audios/NamLayTayAnh.mp3"
        preload="auto"
        loop
      />
      <button onClick={togglePlay} className="btn btn-outline-danger">
        {isPlaying ? (
          <i class="bi bi-volume-up-fill"></i>
        ) : (
          <i class="bi bi-volume-mute-fill"></i>
        )}
      </button>
    </AutoPlayAudioStyledWrapper>
  );
}

export default AutoPlayAudio;
