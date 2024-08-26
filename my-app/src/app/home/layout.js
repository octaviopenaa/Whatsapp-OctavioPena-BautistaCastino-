import Chatbutton from "../components/chatButton";
import chatButton from "../components/chatButton";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
            {children}
            <side>
                <Chatbutton srcImg="./public/next.svg"></Chatbutton>
            </side>
        </body>
      </html>
    );
  }