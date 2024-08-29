"use client";

import { useState } from "react";
import styles from "./Filter.module.css";
import { FilterItem } from "@components/FilterItem/FilterItem";
import { getUniqueValues } from "@utils/getUniqueValues";
import { TrackType } from "@models/track";
import { useAppSelector } from "../../store/store";
import Skeleton from "react-loading-skeleton";

const filterNames: string[] = ["исполнителю", "году выпуска", "жанру"];

type FilterProps = {
  tracks: TrackType[];
};

export function Filter({ tracks }: FilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const { isLoading } = useAppSelector((state) => state.playlist);

  function handleChangeFilter(filterName: string) {
    setActiveFilter((prevState) =>
      prevState === filterName ? null : filterName
    );
  }

  function getUnique(): string[] {
    if (activeFilter === "исполнителю") {
      return getUniqueValues(tracks, "author");
    }

    if (activeFilter === "жанру") {
      return getUniqueValues(tracks, "genre");
    }

    if (activeFilter === "году выпуска") {
      return ["По умолчанию", "Сначала новые", "Сначала старые"];
    }

    return [];
  }

  const uniqueValues = getUnique();

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>
        {isLoading ? <Skeleton width={86} height={24} /> : "Искать по:"}
      </div>
      {isLoading && (
        <Skeleton
          width={156}
          height={38}
          count={3}
          containerClassName={styles.skeletonContainer}
          style={{ borderRadius: "60px" }}
        />
      )}
      {!isLoading && (
        <>
          {filterNames.map((filterName, index) => (
            <FilterItem
              filterName={filterName}
              key={index}
              isActive={activeFilter === filterName}
              handleChangeFilter={handleChangeFilter}
              list={uniqueValues}
            />
          ))}
        </>
      )}
    </div>
  );
}
