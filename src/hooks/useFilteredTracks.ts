import { TrackType } from "@models/track";
import { useAppSelector } from "../store/store";

export function useFilteredTracks(tracks: TrackType[]) {
  const { search } = useAppSelector((state) => state.filters);

  let filteredTracks = tracks;

  if (search) {
    return filteredTracks = tracks.filter((track) =>
      track.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filteredTracks;
}
