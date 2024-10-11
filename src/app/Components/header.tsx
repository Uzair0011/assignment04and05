import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar">

    <div className="logoCombine"> 
       <div className="logoMain"> 
        <Image src={"/uzair.jpg"}
           alt="Logo"
           width={50}
           height={50} />
      </div>
      <div className="logo"> Uzair Ahmed</div>
</div>

      <ul className="navbar-buttons">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/Components/wonders-gallery"}>
          <li>Gallery</li>
        </Link>
        <Link href={"/Components/about-us"}>
          <li>About</li>
        </Link>
        <Link href={"/Components/contact-us"}>
          <li>Contact</li>
        </Link>
      </ul>



    </div>
  );
}
