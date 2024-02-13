import { coreClient } from "../index.api";
import { SignUpDto } from "./auth.dto";

export async function signUp(dto: SignUpDto) {
  const url = "/auth/sign-up";
  await coreClient.post(url, dto);
}
export async function logIn() {
  coreClient;
}

const authAPI = { signUp, logIn };

export default authAPI;
