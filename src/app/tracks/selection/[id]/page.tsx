"use client";

import { getSelectionTracks, getTracks } from "@api/tracksApi";
import { MainCenterblock } from "@components/MainCenterblock/MainCenterblock";
import { TrackType } from "@models/track";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useFilteredTracks } from "../../../../hooks/useFilteredTracks";
import { useAppSelector } from "../../../../store/store";

export default function SelectionPage() {
  const { id } = useParams<{ id: string }>();
  const [selectionTracks, setSelectionTracks] = useState<TrackType[]>([]);
  const [selectionName, setSelectionName] = useState("");

  const { allTracks } = useAppSelector((state) => state.playlist);

  const filteredTracks = useFilteredTracks(selectionTracks);

  useEffect(() => {
    const getData = async () => {
      try {
        const tracks = await getSelectionTracks(id);

        const selectionTracks = allTracks.filter((track) =>
          tracks.items.includes(track._id)
        );

        setSelectionName(tracks.name);
        setSelectionTracks(selectionTracks);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id, allTracks]);

  return <MainCenterblock tracks={filteredTracks} title={selectionName} />;
}
