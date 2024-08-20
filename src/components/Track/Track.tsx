"use client";

import { TrackType } from "@models/track";
import styles from "./Track.module.css";
import { formatTime } from "@utils/formatTime";
import { setCurrentTrack } from "@features/tracksSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import cn from "classnames";
import { useLikeTrack } from "../../hooks/useLikeTrack";

type TrackProps = {
  track: TrackType;
  tracks: TrackType[];
};

export function Track({ track, tracks }: TrackProps) {
  const dispatch = useAppDispatch();
  const { currentTrack, isPlaying } = useAppSelector((state) => state.playlist);
  const { isLiked, handleLike } = useLikeTrack(track);

  const { name, author, album, duration_in_seconds } = track;
  const conditionCurrentTrack = currentTrack?._id === track._id;

  function handleSelectTrack() {
    dispatch(setCurrentTrack({ currentTrack: track, playlist: tracks }));
  }

  return (
    <div className={styles.playlistItem} onClick={handleSelectTrack}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          {conditionCurrentTrack && (
            <div
              className={cn(styles.blinkedMark, { [styles.active]: isPlaying })}
            ></div>
          )}
          <div>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan}></span>
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div className={styles.trackItem}>
          <div className={styles.trackTime} onClick={handleLike}>
            <svg className={styles.trackTimeSvg}>
              <use
                xlinkHref={`/img/icon/sprite.svg#icon-${
                  isLiked ? "like" : "dislike"
                }`}
              ></use>
            </svg>
          </div>
          <span className={styles.trackTimeText}>
            {formatTime(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
