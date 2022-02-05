import "../styles/globals.css";
import "../styles/form.css";
import "../styles/contact.css";
import UserContextProvider from "@/context/userContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />{" "}
    </UserContextProvider>
  );
}

export default MyApp;
