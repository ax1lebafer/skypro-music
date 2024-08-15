import { FC } from "react";

import { MainCenterblock } from "@components/MainCenterblock/MainCenterblock";
import { TrackType } from "@models/track";

type MainProps = {
  tracks: TrackType[];
};

export const Main: FC<MainProps> = ({ tracks }) => {
  return <MainCenterblock tracks={tracks} />;
};
