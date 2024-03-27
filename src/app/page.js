'use client'
import Image from "next/image";
import styles from "./page.module.css";

import App from "./COMPONENTS/SWIBER/Swiber";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Second from "./COMPONENTS/secondsection/Second";
import Third from "./COMPONENTS/thirdsection/Third";
import { createClient } from "@supabase/supabase-js";
import Four from "./COMPONENTS/foruthsection/Four";
import Five from "./COMPONENTS/FIVESECTION/Five";
export default function Home() {
  useEffect(() => {
    AOS.init({});
  
   
  }, [])
  
  return (
   
    <main >
   
 <App/>
 <Second/>
 <Third/>
 <Four/>
 <Five/>
    </main>
  );
}
