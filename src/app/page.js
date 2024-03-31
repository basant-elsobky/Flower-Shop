
import Image from "next/image";
import styles from "./page.module.css";

import App from "./COMPONENTS/SWIBER/Swiber";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Second from "./COMPONENTS/secondsection/Second";

import { createClient } from "@supabase/supabase-js";
import Four from "./COMPONENTS/foruthsection/Four";
import Five from "./COMPONENTS/FIVESECTION/Five";







export default async function Home() {
  // useEffect(() => {
  //   AOS.init({});

  // }, [])
  // const name = "Ahmed Saber"
  // const email = "ahmed0saber33@gmail"
  // const message = "Hello Saber!"


  // fetch("https://sendmail-api-docs.vercel.app/api/send", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     to: "ahmed0saber33@gmail.com",
  //     subject: "Flower Shop | Contact US",
  //     message: `
  //         <p style>Name: ${name}</p>
  //         <p>Email: ${email}</p>
  //         <p>Message: ${message}</p>
  //       `,
  //   })
  // })
  //   .then(res => res.json())
  //   .then(data => console.log(data))




  return (

    <main >

      <App />
      <Second />

      <Four />
      <Five />
    </main>
  );
}
