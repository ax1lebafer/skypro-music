import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUrl = "https://webdev-music-003b5b991590.herokuapp.com/user/login/";
const registerUrl =
  "https://webdev-music-003b5b991590.herokuapp.com/user/signup/";

type LoginProps = {
  email: string;
  password: string;
};

type RegisterProps = {
  email: string;
  password: string;
  username: string;
};

export const signIn = createAsyncThunk(
  "user/login",
  async ({ email, password }: LoginProps) => {
    const response = await fetch(loginUrl, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.detail);
    }

    return json;
  }
);

export const signUp = createAsyncThunk(
  "user/register",
  async ({ email, password, username }: RegisterProps) => {
    const response = await fetch(registerUrl, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: {
        "content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.detail);
    }

    return json;
  }
);

export const fetchToken = async ({ email, password }: LoginProps) => {
  const response = await fetch(
    "https://webdev-music-003b5b991590.herokuapp.com/user/token/",
    {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.detail);
  }

  return json;
};
