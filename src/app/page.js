
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
  




 

  return (

    <main >

      <App />
      <Second />

      <Four />
      <Five />
      
    </main>
  );
}
