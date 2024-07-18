"use client";

import { useState } from "react";
import { TrackType } from "../../types/track";
import styles from "./Filter.module.css";
import cn from "classnames";

type FilterProps = {
  tracks: TrackType[];
};

export function Filter({ tracks }: FilterProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  function handleChangeFilter(filterName: string) {
    setActiveFilter((prevState) =>
      prevState === filterName ? null : filterName
    );
  }
  
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div className={cn(styles.filterButton, styles.btnText)}>исполнителю</div>
      <div className={cn(styles.filterButton, styles.btnText)}>
        году выпуска
      </div>
      <div className={cn(styles.filterButton, styles.btnText)}>жанру</div>
    </div>
  );
}
