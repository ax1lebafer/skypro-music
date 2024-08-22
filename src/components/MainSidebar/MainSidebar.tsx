import { SideBarPersonal } from "@components/SideBarPersonal/SideBarPersonal";
import { useInitLikedTracks } from "../../hooks/useInitLikedTracks";
import styles from "./MainSidebar.module.css";
import { SidebarItem } from "@components/SidebarItem/SidebarItem";

export function MainSidebar() {
  return (
    <div className={styles.sidebar}>
      <SideBarPersonal />
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          {[1, 2, 3].map((item) => (
            <SidebarItem key={item} id={item.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
}
