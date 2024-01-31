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

        <div className={styles.center}>
          <h1>
            BLOB EATER
          </h1>
          <p>
            Meet BLOB-EATER, the youngest team member of <a href="https://meinstrain.com/">MeinStrain</a>. It's has the intelligence of a jellyfish, but you can trust it to follow the daily cycle and eats blobs from our server.
          </p>
          <Image
            className={styles.avatar}
            src="/BLOB-EATER-min.png"
            alt="BLOB EATER AVATAR"
            width={512}
            height={512}
            priority
          />
          <h2>
            Feeding schedule
          </h2>
          <p>At night, the BLOB EATER awakens and feed on all blobs not too young to die (less than an hour old).</p>
          <a
            href="/api/edge"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >Feed now!</a>
        </div>
      </main>
      <footer className={styles.center}>
        <small>Copyright 2024 © | <a href="https://meinstrain.com/legal-notice">Legal Notice</a> | MeinStrain OÜ | hello (at) meinstrain.com | Version 0.2.0</small>
      </footer>
    </>
  );
}
