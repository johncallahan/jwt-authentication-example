import jwt from "jsonwebtoken";
import cookie from "cookie";

function createJwtCookie(userId, email) {
  const secretKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    process.env.JWT_SECRET_KEY +
    "\n-----END RSA PRIVATE KEY-----";
  console.log("i am here 1");
  const token = jwt.sign({ userId, email }, secretKey, {
    algorithm: "RS256",
    expiresIn: "100 days"
  });
  console.log("i am here 2");
  const jwtCookie = cookie.serialize("jwt", token, {
    secure: process.env.NETLIFY_DEV !== "true",
    httpOnly: true,
    path: "/"
  });
  console.log("i am here 3");
  return jwtCookie;
}

function clearCookie() {
  return "jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

export { createJwtCookie, clearCookie };
