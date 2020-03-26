import bcrypt from "bcryptjs";
import { createClient } from "../helpers/db-helper";
import { createJwtCookie } from "../helpers/jwt-helper";

export async function handler(event) {
  const dbClient = createClient();
  let errorStatusCode = 500;

  try {
    console.log("reached 1");
    await dbClient.connect();
    console.log("reached 2");
    const users = dbClient.usersCollection();
    console.log("reached 3");

    const { email, password } = JSON.parse(event.body);
    
    console.log(email);

    const existingUser = await users.findOne({ email });
    console.log("reached 4");
    if (existingUser !== null) {
      errorStatusCode = 409;
      throw new Error(`A user already exists with the email: ${email}`);
    }
    console.log("reached 5");

    const passwordHash = await bcrypt.hash(password, 10);
    console.log("reached 6");

    const { insertedId } = await users.insertOne({
      email,
      password: passwordHash
    });
    console.log("reached 7");
    const cookie = createJwtCookie(insertedId, email);
    console.log("reached 8");
    const body = JSON.stringify({ id: insertedId, email });
    console.log("reached 9");
    return {
      statusCode: 200,
      headers: {
        "Set-Cookie": cookie,
        "Content-Type": "application/json"
      },
      body: body
    };
  } catch (err) {
    return {
      statusCode: errorStatusCode,
      body: JSON.stringify({ msg: err.message })
    };
  } finally {
    dbClient.close();
  }
}
