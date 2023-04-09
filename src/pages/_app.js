import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import Login from "./login";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { addDoc, doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const docRef = doc(db, `users/${user.uid}`);

      setDoc(docRef, {
        email: user.email,
        photoURL: user.photoURL,
        lastSeen: serverTimestamp(),
      });
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}
