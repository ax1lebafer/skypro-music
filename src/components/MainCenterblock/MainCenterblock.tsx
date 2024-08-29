"use client";

import { PlaylistContent } from "@components/PlaylistContent/PlaylistContent";
import { Filter } from "@components/Filter/Filter";
import { TrackType } from "@models/track";

import styles from "./MainCenterblock.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppSelector } from "../../store/store";

type MainCenterblockProps = {
  tracks: TrackType[];
  title: string;
};

export function MainCenterblock({ tracks, title }: MainCenterblockProps) {
  const { isLoading } = useAppSelector((state) => state.playlist);

  return (
    <>
      <h2 className={styles.centerblockH2}>
        {isLoading ? <Skeleton /> : title}
      </h2>
      <Filter tracks={tracks} />
      <PlaylistContent tracks={tracks} />
    </>
  );
}
