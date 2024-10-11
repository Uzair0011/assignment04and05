import Image from "next/image";
import Link from "next/link";
import "./style.css";

export default function Contact() {
  return (
    <div className="first">
      <div className="main">
        <div className="div2">
          <h1> Experience Excellence in Service</h1>
          <p>
            We had love to hear from you! Whether you have a question or need
            assistance, we are here to help.
          </p>
        </div>

        <div className="social">
          <h1> Social Media Links</h1>
          <div className="we">
            <Link href={"https://www.linkedin.com/in/uzair0011/"}>
              <img className="logoBig" src="/linkedin.png" alt="logo" />{" "}
            </Link>

            <Link href={"https://github.com/Uzair0011"}>
              <img className="logoBig" src="/git.png" alt="logo" />{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="f"></div> */}
    </div>
  );
}
