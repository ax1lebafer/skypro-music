import { Player } from "@components/Player/Player";
import styles from "./Bar.module.css";
import { Volume } from "@components/Volume/Volume";
import { TrackType } from "@models/track";

type BarProps = {
  track: TrackType;
};

export function Bar({ track }: BarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <div className={styles.barPlayerProgress}></div>
        <div className={styles.barPlayerBlock}>
          <Player track={track} />
          <Volume />
        </div>
      </div>
    </div>
  );
}
