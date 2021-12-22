import { getFirestore, collection, doc, setDoc } from "@firebase/firestore";

interface MailParams {
  to: string;
  from: string;
  subject: string;
  message: string;
}

const sendMail = async ({
  to,
  message,
  subject,
}: MailParams): Promise<void> => {
  const mailsRef = collection(getFirestore(), "auto-mails");
  const newMailRef = doc(mailsRef);
  await setDoc(newMailRef, { to, message: { subject, html: message } });
};

export default sendMail;
