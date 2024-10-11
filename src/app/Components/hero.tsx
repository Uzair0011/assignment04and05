import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <span className="big-text">Wonders</span>
        <br />
        <span className="small-text">of the</span>
        <span className="big-text">World</span>
      </div>
      <div className="imageSize1">
        <img src="/bg06.jpg" alt="image" />
        {/* <Image
          src="/bg06.jpg"
          alt="Display Image"
          width={1500} // Width of the image in pixels
          height={1300} // Height of the image in pixels
        /> */}
      </div>
    </div>
  );
}
