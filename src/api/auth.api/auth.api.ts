import { coreClient } from "../index.api";
import { emailPasswordDto } from "./auth.dto";

export async function signUp(dto: emailPasswordDto) {
  const url = "/auth/sign-up";
  await coreClient.post(url, dto);
}
export async function logIn(dto: emailPasswordDto) {
  const url = "/auth/log-in";
  await coreClient.post(url, dto);
}
export async function logOut() {
  const url = "/auth/log-out";
  await coreClient.delete(url);
}
export async function refreshToken() {
  const url = "/auth/refresh-token";
  const isLoggedIn = (await coreClient.get(url)).data.result;
  return isLoggedIn;
}

const authAPI = { signUp, logIn, logOut, refreshToken };

export default authAPI;
