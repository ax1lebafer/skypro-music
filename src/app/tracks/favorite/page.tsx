"use client";

import { MainCenterblock } from "@components/MainCenterblock/MainCenterblock";
import { useAppSelector } from "../../../store/store";
import { useFilteredTracks } from "../../../hooks/useFilteredTracks";

export default function FavoritePage() {
  const favoriteTracks = useAppSelector((state) => state.playlist.likedTracks);
  const filteredTracks = useFilteredTracks(favoriteTracks);

  return <MainCenterblock tracks={filteredTracks} title={"Мои треки"} />;
}
