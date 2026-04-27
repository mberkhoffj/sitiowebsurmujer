import validateToken from "@/service/tokenService";

export const excludedRoutes = [
  "LoginPage",
  "recuperar-password",
  "seleccionar-empresas",
  "recover-password",
  "confirmAccount",
  "confirmEmailChange",
  "oauthGoogle",
  "oauthMicrosoft",
  "confirmUpdatePassword",
];
// TODO: Keep investigate for token in local storage
export default function isAuthenticatedGuard(to, from, next, store) {
  const token = localStorage.getItem("token");

  //we evaluate the case if the user want to navigate in the app without a tokken
  if (!token) {
    // in case the use dosent have a tokken , we re direct it to the login page
    next("/login");
  } else {

    //we evaluate the case if the user want to navigate in the app with a tokken , but we evaluate if the token is still valid
    validateToken
      .verify_token({
        token,
      })
      .then(() => {
        // TODO: RESEARCH REFRESH TOKEN IN VALIDATOR
        // LoginStore.dispatch("Login/updateCredentialToken", token);
        next();
      })
      .catch(() => {
        store.dispatch("Login/logOut", null);
        next("/login");
      });
  }
}
