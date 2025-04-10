import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioSource, setAudioSource] = useState<string>('/audio/background-music.mp3');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(30);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const audioSources = [
    '/audio/background-music.mp3',
    '/audio/test.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Set initial volume and loop
      audio.volume = volume / 100;
      audio.loop = true;
      
      // Add error listener
      const handleError = (e: Event) => {
        console.error('Audio error:', e);
        setErrorMessage(`Error playing audio: ${(e as ErrorEvent).message || 'Unknown error'}`);
        setIsPlaying(false);
      };
      
      // Add canplay listener
      const handleCanPlay = () => {
        console.log('Audio can play');
        setErrorMessage('');
      };

      // Add play listener
      const handlePlay = () => {
        console.log('Audio started playing');
        setIsPlaying(true);
      };

      // Add pause listener
      const handlePause = () => {
        console.log('Audio paused');
        setIsPlaying(false);
      };

      audio.addEventListener('error', handleError);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);

      // Try to load the audio
      audio.load();

      return () => {
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.pause();
      };
    }
  }, [audioSource]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        setErrorMessage(`Error playing audio: ${error.message}`);
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handleSourceChange = (source: string) => {
    setAudioSource(source);
    setIsPlaying(false);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Audio Player (Debug Mode)</h3>
      
      <audio
        ref={audioRef}
        src={audioSource}
        preload="auto"
        controls
      />
      
      <div className="flex items-center mb-4">
        <button 
          onClick={handlePlayPause}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-4 hover:bg-blue-600"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <div className="flex-1">
          <label htmlFor="volume" className="block text-sm mb-1">Volume: {volume}%</label>
          <input
            type="range"
            id="volume"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium mb-2">Audio Sources:</p>
        <div className="flex flex-col space-y-2">
          {audioSources.map((source) => (
            <button
              key={source}
              onClick={() => handleSourceChange(source)}
              className={`px-3 py-1 text-sm text-left rounded ${
                audioSource === source ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {source}
            </button>
          ))}
        </div>
      </div>
      
      {errorMessage && (
        <div className="p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          {errorMessage}
        </div>
      )}
      
      <p className="text-xs text-gray-500 mt-2">
        Status: {isPlaying ? 'Playing' : 'Paused'} | 
        Source: {audioSource}
      </p>
    </div>
  );
};

export default AudioPlayer;
