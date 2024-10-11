import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foodContainer">
        <h5>Contact Us</h5>

        <Link href={"https://www.linkedin.com/in/uzair0011/"} target="_blank">
          <p className="logo2">
            <Image
              className="img123"
              src="/linkedin.png"
              alt="LinkedIn Logo"
              width={24}
              height={24}
            />
            LinkedIn
          </p>
        </Link>

        <Link href={"https://github.com/Uzair0011"} target="_blank">
          <p className="logo2">
            <Image
              className="img123"
              src="/git.png"
              alt="Github Logo"
              width={24}
              height={24}
            />{" "}
            Github
          </p>
        </Link>
      </div>

      <div className="foodContainer">
        <Link href={"/"}>
          <ol className="rightAlign">Home</ol>
        </Link>

        <Link href={"/Components/wonders-gallery"}>
          <ol className="rightAlign">Gallery</ol>
        </Link>

        <Link href={"/Components/about-us"}>
          <ol className="rightAlign">About</ol>
        </Link>

        <Link href={"/Components/contact-us"}>
          <ol className="rightAlign">Contact</ol>
        </Link>
      </div>
    </div>
  );
}
