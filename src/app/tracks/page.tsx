"use client";

import styles from "./page.module.css";
import { MainCenterblock } from "@components/MainCenterblock/MainCenterblock";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllTracks } from "@features/tracksSlice";
import { useFilteredTracks } from "../../hooks/useFilteredTracks";

export default function Home() {
  const dispatch = useAppDispatch();
  const { allTracks } = useAppSelector((state) => state.playlist);
  const [error, setError] = useState<null | string>(null);

  const filteredTracks = useFilteredTracks(allTracks);

  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(getAllTracks()).unwrap();
        setError(null);
      } catch (error: unknown) {
        error instanceof Error
          ? setError(error.message)
          : setError("Неизвестная ошибка");
      }
    };

    getData();
  }, [dispatch]);

  return (
    <>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : (
        <MainCenterblock tracks={filteredTracks} title={"Все треки"} />
      )}
    </>
  );
}
