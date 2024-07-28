import { Player } from "@components/Player/Player";
import styles from "./Bar.module.css";
import { Volume } from "@components/Volume/Volume";
import { TrackType } from "@models/track";
import { ProgressBar } from "@components/ProgressBar/ProgressBar";
import { useEffect, useRef, useState } from "react";

type BarProps = {
  track: TrackType;
};

export function Bar({ track }: BarProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isLoop, setIsLoop] = useState<boolean>(false);
  const duration = audioRef.current?.duration || 0;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [track]);

  function togglePlay() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying((prev) => !prev);
  }

  function handleSeek(event: React.ChangeEvent<HTMLInputElement>) {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  }

  function handleLoop() {
    if (audioRef.current) {
      audioRef.current.loop = !isLoop;
      setIsLoop((prevState) => !prevState);
    }
  }

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handleSeek}
        />
        <div className={styles.barPlayerBlock}>
          <audio
            ref={audioRef}
            src={track.track_file}
            onTimeUpdate={(e) => {
              setCurrentTime(e.currentTarget.currentTime);
            }}
          />
          <Player
            track={track}
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            handleLoop={handleLoop}
            isLoop={isLoop}
          />
          <Volume />
        </div>
      </div>
    </div>
  );
}
