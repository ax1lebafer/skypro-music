import Image from "next/image";
import styles from "./SidebarItem.module.css";
import Link from "next/link";

type SidebarItemProps = {
  id: string;
};

export function SidebarItem({ id }: SidebarItemProps) {
  return (
    <div className={styles.sidebarItem}>
      <Link className={styles.sidebarLink} href={`/tracks/selection/${id}`}>
        <Image
          className={styles.sidebarImg}
          src={`/img/playlist0${id}.png`}
          alt="day's playlist"
          width={250}
          height={150}
          priority
        />
      </Link>
    </div>
  );
}
