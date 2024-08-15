import { PlaylistContent } from "@components/PlaylistContent/PlaylistContent";
import { Filter } from "@components/Filter/Filter";
import { TrackType } from "@models/track";

import styles from "./MainCenterblock.module.css";

type MainCenterblockProps = {
  tracks: TrackType[];
};

export function MainCenterblock({ tracks }: MainCenterblockProps) {
  return (
    <>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter tracks={tracks} />
      <PlaylistContent tracks={tracks} />
    </>
  );
}
