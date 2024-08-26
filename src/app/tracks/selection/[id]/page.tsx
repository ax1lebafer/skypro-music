"use client";

import { getSelectionTracks, getTracks } from "@api/tracksApi";
import { MainCenterblock } from "@components/MainCenterblock/MainCenterblock";
import { TrackType } from "@models/track";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SelectionPage() {
  const { id } = useParams<{ id: string }>();
  const [selectionTracks, setSelectionTracks] = useState<TrackType[]>([]);
  const [selectionName, setSelectionName] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const allTracks: TrackType[] = await getTracks();
        const tracks = await getSelectionTracks(id);

        const res = allTracks.filter((track) =>
          tracks.items.includes(track._id)
        );

        setSelectionName(tracks.name);
        setSelectionTracks(res);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  return <MainCenterblock tracks={selectionTracks} title={selectionName} />;
}
