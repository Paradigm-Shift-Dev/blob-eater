import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            <a
              href="https://meinstrain.com"
              target="_blank"
            >
              <Image
                src="/meinstrain-app-logo.svg"
                alt="MeinStrain Logo"
                className={styles.logo}
                width={140}
                height={96}
                priority
              />
            </a>
          </div>
        </div>

        <div>
          <h1>
            BLOB EATER
          </h1>
          <p>Meet BLOB EATER, the youngest team member of <a href="https://meinstrain.com/">MeinStrain</a>.</p>
          <p>While MARI and MIRA are supremely knowledgable and embodied in the form of text and sound interactions IRL with humans, BLOB EATER has a unique purpose, role and embodiment.</p>
          <div className={styles.avatarWrapper}> 
            <Image
              className={styles.avatar}
              src="/BLOB-EATER-min.png"
              alt="BLOB EATER AVATAR"
              width={512}
              height={512}
              priority
            />
            <div className={styles.banner}>
              <a
              href="/api/edge"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
              >FEED ME</a>
               <a
              href="https://github.com/Paradigm-Shift-Dev/blob-eater.git"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
              >CLONE ME ON GITHUB</a>
            </div>
          </div>
          <h2>PURPOSE, ROLE</h2>
          <p>BLOB EATER's purpose is to feed on old blobs (mp3 files) from the AI Avatars: <a href="https://meinstrain.com/">MARI & MIRA</a>. BLOB EATER's role is to balance our overall digital footprint and maintain system-harmony.</p>
          <h2>EMBODIMENT</h2>
          <p>We consider BLOB EATER as a digital house pet at team MeinStrain. Good boy!</p>
          <h2>
            FEEDING
          </h2>
          <p>At night, the BLOB EATER awakens  and feed on all blobs not too young to die (less than an hour old).</p>
        </div>
      </main>
      <footer className={styles.center}>
        <small>Copyright 2024 © | <a href="https://meinstrain.com/legal-notice">Legal Notice</a> | MeinStrain OÜ | hello (at) meinstrain.com | Version 0.2.1</small>
      </footer>
    </>
  );
}
