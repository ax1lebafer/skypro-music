"use client";

import Image from "next/image";
import styles from "./SignIn.module.css";
import cn from "classnames";
import Link from "next/link";

export function SignIn() {
  function login(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} onSubmit={login}>
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  className={styles.modalLogoImage}
                  src="/img/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            <input
              className={cn(styles.modalInput, styles.login)}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modalBtnEnter}>Войти</button>
            <button className={styles.modalBtnSignup}>
              <Link className={styles.modalBtnSignupLink} href="/signup">
                Зарегистрироваться
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
