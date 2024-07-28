import { Player } from "@components/Player/Player";
import styles from "./Bar.module.css";
import { Volume } from "@components/Volume/Volume";
import { TrackType } from "@models/track";
import { ProgressBar } from "@components/ProgressBar/ProgressBar";

type BarProps = {
  track: TrackType;
};

export function Bar({ track }: BarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <ProgressBar />
        <div className={styles.barPlayerBlock}>
          <Player track={track} />
          <Volume />
        </div>
      </div>
    </div>
  );
}
