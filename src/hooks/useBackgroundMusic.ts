import { useEffect, useRef } from 'react';

const useBackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Set audio properties
      audio.volume = 0.3; // Adjust volume (0.0 to 1.0)
      audio.loop = true; // Loop the music
      
      // Play when the component mounts
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }

    // Clean up
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  return audioRef;
};

export default useBackgroundMusic;
