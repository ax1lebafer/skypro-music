import { TrackType } from "@models/track";
import { useAppSelector } from "../store/store";

export function useFilteredTracks(tracks: TrackType[]) {
  const { search, authors, genres, dateOrder } = useAppSelector(
    (state) => state.filters
  );

  let filteredTracks = tracks;

  if (search) {
    return (filteredTracks = tracks.filter((track) =>
      track.name.toLowerCase().includes(search.toLowerCase())
    ));
  }

  if (authors.length > 0) {
    filteredTracks = filteredTracks.filter((track) =>
      authors.includes(track.author)
    );
  }

  if (genres.length > 0) {
    filteredTracks = filteredTracks.filter((track) =>
      track.genre.some((genre) => genres.includes(genre))
    );
  }

  if (dateOrder === "Сначала новые") {
    filteredTracks = filteredTracks
      .slice()
      .sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      );
  } else if (dateOrder === "Сначала старые") {
    filteredTracks = filteredTracks
      .slice()
      .sort(
        (a, b) =>
          new Date(a.release_date).getTime() -
          new Date(b.release_date).getTime()
      );
  }

  return filteredTracks;
}
