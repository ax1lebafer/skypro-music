"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./SignUp.module.css";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../store/store";
import React, { useState } from "react";
import { getToken, signUp } from "@features/userSlice";

export function SignUp() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    username: "",
  });

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  }

  async function signup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!userData.email || !userData.password || !userData.username) {
      setError("Заполните все поля");
      return;
    }

    if (userData.password.length < 6) {
      setError("Пароль должен быть больше 6 символов");
      return;
    }

    if (userData.username.length < 3) {
      setError("Имя пользователя должно быть больше 3 символов");
      return;
    }

    try {
      setError("");
      await dispatch(signUp(userData)).unwrap();
      await dispatch(getToken(userData)).unwrap();
      router.push("/signin");
    } catch (error: any) {
      setError(error.message);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} onSubmit={signup}>
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
              className={styles.modalInput}
              type="email"
              name="email"
              placeholder="Почта"
              onChange={handleChangeInput}
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
              onChange={handleChangeInput}
            />
            <input
              className={styles.modalInput}
              type="text"
              name="username"
              placeholder="Имя пользователя"
              onChange={handleChangeInput}
            />
            {error && <div className={styles.error}>{error}</div>}
            <button className={styles.modalBtnSignupEnt}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
