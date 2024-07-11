import Image from "next/image";
import styles from "./Main.module.css";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import { MainCenterblock } from "../MainCenterblock/MainCenterblock";

export function Main() {
  return (
    <main className={styles.main}>
      <MainNavigation />
      <MainCenterblock />
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg>
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <Image
                  className="sidebar__img"
                  src="/img/playlist01.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <Image
                  className="sidebar__img"
                  src="/img/playlist02.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <Image
                  className="sidebar__img"
                  src="/img/playlist03.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
