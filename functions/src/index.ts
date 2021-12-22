import * as functions from "firebase-functions";
import { createTransport } from "nodemailer";

export const sendMail = functions
  .region("europe-west6")
  .firestore.document("mails/{mail}")
  .onWrite(async ({ after }) => {
    functions.logger.log("Mail received");
    const data = after.data()!;
    Object.keys(data).forEach((key) => {
      functions.logger.log(`${key}: ${data[key]}`);
    });
    const transportLayer = createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "ikusteu@gmail.com",
        pass: "testpass234",
      },
    });
    functions.logger.log("Transport created");
    const { to, from, subject, message } = data;
    await transportLayer.sendMail({
      to,
      from,
      subject,
      html: `<p>${message}</p>`,
    });
  });
