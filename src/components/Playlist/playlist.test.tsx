import { TrackType } from "@models/track";
import { Playlist } from "./Playlist";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../Track/Track", () => ({
  Track: ({ track }: { track: TrackType }) => <div>{track.name}</div>,
}));

describe("Playlist", () => {
  it("should render a list of tracks", () => {
    const tracks: TrackType[] = [
      {
        _id: 1,
        name: "Track 1",
        author: "Author 1",
        album: "Album 1",
        duration_in_seconds: 180,
        track_file: "",
        release_date: "2023-01-01",
        genre: "Pop",
        logo: "",
        stared_user: [],
      },
      {
        _id: 2,
        name: "Track 2",
        author: "Author 2",
        album: "Album 2",
        duration_in_seconds: 200,
        track_file: "",
        release_date: "2023-01-01",
        genre: "Pop",
        logo: "",
        stared_user: [],
      },
      {
        _id: 3,
        name: "Track 3",
        author: "Author 3",
        album: "Album 3",
        duration_in_seconds: 240,
        track_file: "",
        release_date: "2023-01-01",
        genre: "Pop",
        logo: "",
        stared_user: [],
      },
    ];

    render(<Playlist tracks={tracks} />);

    tracks.forEach((track) => {
      expect(screen.getByText(track.name)).toBeInTheDocument();
    });
  });

  it("should render empty playlist without errors", () => {
    render(<Playlist tracks={[]} />);

    expect(screen.queryByText(/Track/i)).not.toBeInTheDocument();
  });
});
