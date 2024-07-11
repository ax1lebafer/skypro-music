import { PlaylistContent } from "@components/PlaylistContent/PlaylistContent";
import styles from "./MainCenterblock.module.css";
import { Search } from "@components/Search/Search";
import { Filter } from "@components/Filter/Filter";

export function MainCenterblock() {
  return (
    <div className={styles.main__centerblock}>
      <Search />
      <h2 className={styles.centerblock__h2}>Треки</h2>
      <Filter />
      <PlaylistContent />
    </div>
  );
}
