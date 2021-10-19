import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/cat.jpeg"
          alt="An image showing cat"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Cat</h1>
      <p>I blog about cat and kitty all around the world</p>
    </section>
  );
}
