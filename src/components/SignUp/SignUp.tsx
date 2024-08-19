"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./SignUp.module.css";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../store/store";
import React, { useState } from "react";
import { signUp } from "@api/userApi";
import { getToken } from "@features/userSlice";
import { register } from "module";

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
    try {
      if (!userData.email || !userData.password || !userData.username) {
        setError("Заполните все поля");
        return;
      }

      if (userData.password.length < 6) {
        setError("Пароль должен быть больше 6 символов");
        return;
      }

      await dispatch(signUp(userData));
      await dispatch(getToken(userData));
      router.push("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(userData);

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
