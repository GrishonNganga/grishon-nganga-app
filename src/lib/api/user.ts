import { UserPayload } from "@/lib/types";

type SignIn = {
  username: string;
  password: string;
};

const BASE_URL =
  "https://kcb-boma-yangu-backend-kcb-boma-yangu.apps.dev.aro.kcbgroup.com/api";

export const signin = async (userDetails: SignIn) => {
  try {
    const resp = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic Qm9tYVBvcnRhbENsaWVudDpjYmZiZDBhYi0yODc2LTQ0MmItYTNjOC04YWVkOTYzMmJhODM=`,
      },
      body: JSON.stringify(userDetails),
    });
    if (resp.ok) {
      return await resp.json();
    }
    const data = await resp.text();
    throw new Error(data);
  } catch (e) {
    throw e;
  }
};

export const getUsers = async (): Promise<UserPayload[]> => {
  const user = window.sessionStorage.getItem("userLoggedIn");
  if (!user) throw new Error("Not logged in");
  const userObj = JSON.parse(user);
  try {
    const resp = await fetch(`${BASE_URL}/users/listAll`, {
      method: "POST",
      body: JSON.stringify({ token: userObj.token }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic Qm9tYVBvcnRhbENsaWVudDpjYmZiZDBhYi0yODc2LTQ0MmItYTNjOC04YWVkOTYzMmJhODM=`,
      },
    });
    const data = await resp.json();
    return data?.payload?.content as any;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const searchForUser = async (userName: string) => {
  const user = window.sessionStorage.getItem("userLoggedIn");
  if (!user) throw new Error("Not logged in");
  const userObj = JSON.parse(user);
  try {
    const resp = await fetch(`${BASE_URL}/users/search`, {
      method: "POST",
      body: JSON.stringify({
        token: userObj.token,
        payload: { usrUsername: userName },
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic Qm9tYVBvcnRhbENsaWVudDpjYmZiZDBhYi0yODc2LTQ0MmItYTNjOC04YWVkOTYzMmJhODM=`,
      },
    });
    const data = await resp.json();
    return data?.payload as any;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
