import { Track } from "@components/Track/Track";
import styles from "./Playlist.module.css";
import { TrackType } from "@models/track";

type PlaylistProps = {
  tracks: TrackType[];
};

export function Playlist({ tracks }: PlaylistProps) {
  return (
    <div className={styles.contentPlaylist}>
      {tracks.map((track) => (
        <Track track={track} key={track._id} tracks={tracks} />
      ))}
    </div>
  );
}
