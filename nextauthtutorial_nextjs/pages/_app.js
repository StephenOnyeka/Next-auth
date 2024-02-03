import "@/styles/globals.css";
import "@/components/Navbar.css"

import { SessionProvider } from "next-auth/react"

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}