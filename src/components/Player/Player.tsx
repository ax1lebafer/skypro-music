"use client";

import { TrackType } from "@models/track";
import styles from "./Player.module.css";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  setIsShuffle,
  setNextTrack,
  setPrevTrack,
} from "@features/tracksSlice";

type PlayerProps = {
  track: TrackType | null;
  togglePlay: () => void;
  isPlaying: boolean;
  handleLoop: () => void;
  isLoop: boolean;
};

export function Player({
  track,
  togglePlay,
  isPlaying,
  handleLoop,
  isLoop,
}: PlayerProps) {
  const dispatch = useAppDispatch();
  const { isShuffle } = useAppSelector((state) => state.playlist);

  const nextTrack = () => {
    dispatch(setNextTrack());
  };

  const prevTrack = () => {
    dispatch(setPrevTrack());
  };

  const toggleShuffle = () => {
    dispatch(setIsShuffle(isShuffle ? false : true));
  };

  return (
    <div className={styles.player}>
      <div className={styles.playerControls}>
        <div className={styles.playerBtnPrev}>
          <svg className={styles.playerBtnPrevSvg} onClick={prevTrack}>
            <use href="img/icon/sprite.svg#icon-prev"></use>
          </svg>
        </div>
        <div className={styles.playerBtnPlay} onClick={togglePlay}>
          <svg className={styles.playerBtnPlaySvg}>
            <use
              href={
                isPlaying
                  ? "img/icon/sprite.svg#icon-pause"
                  : "img/icon/sprite.svg#icon-play"
              }
            ></use>
          </svg>
        </div>
        <div className={styles.playerBtnNext} onClick={nextTrack}>
          <svg className={styles.playerBtnNextSvg}>
            <use href="img/icon/sprite.svg#icon-next"></use>
          </svg>
        </div>
        <div
          className={cn(styles.playerBtnRepeat, styles.btnIcon)}
          onClick={handleLoop}
        >
          <svg
            className={cn(styles.playerBtnRepeatSvg, {
              [styles.active]: isLoop,
            })}
          >
            <use href="img/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div
          className={cn(styles.playerBtnShuffle, styles.btnIcon)}
          onClick={toggleShuffle}
        >
          <svg className={styles.playerBtnShuffleSvg}>
            <use href="img/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>

      <div className={styles.trackPlay}>
        <div className={styles.trackPlayContain}>
          <div className={styles.trackPlayImage}>
            <svg className={styles.trackPlaySvg}>
              <use href="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles.trackPlayAuthor}>
            <a className={styles.trackPlayAuthorLink} href="http://">
              {track?.name}
            </a>
          </div>
          <div className={styles.trackPlayAlbum}>
            <a className={styles.trackPlayAlbumLink} href="http://">
              {track?.author}
            </a>
          </div>
        </div>

        <div className={styles.trackPlayLikeDis}>
          <div className={cn(styles.trackPlayLike, styles.btnIcon)}>
            <svg className={styles.trackPlayLikeSvg}>
              <use href="img/icon/sprite.svg#icon-like"></use>
            </svg>
          </div>
          <div className={cn(styles.trackPlayDislike, styles.btnIcon)}>
            <svg className={styles.trackPlayDislikeSvg}>
              <use href="img/icon/sprite.svg#icon-dislike"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
