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
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);

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

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <ProgressBar />
        <div className={styles.barPlayerBlock}>
          <audio ref={audioRef} src={track.track_file}></audio>
          <Player track={track} togglePlay={togglePlay} isPlaying={isPlaying} />
          <Volume />
        </div>
      </div>
    </div>
  );
}
