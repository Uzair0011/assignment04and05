import Image from "next/image"; // Now using the imported Image component
import Link from "next/link";

import "./style.css";

export default function Blog() {
  return (
    <div className="parentContainer">
      <div className="childContainer">
        <Link href={"./01.jpg"} target="_blank">
          <Image
            className="img1"
            src="/01.jpg"
            alt="Giza pyramid"
            width={600}
            height={400}
          />
        </Link>
        <div className="right">
          <h1 className="blog-head">Giza pyramid</h1>
          <p className="blog-definition">
            The Giza pyramid complex (also called the Giza necropolis) in Egypt is home to the Great Pyramid.
          </p>
          <Link href={"Components/Christ"}>
            <button className="button">
              <span>Read More</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="childContainer">
        <Link href={"./02.jpg"} target="_blank">
          <Image
            className="img1"
            src="/02.jpg"
            alt="Machu Picchu"
            width={600}
            height={400}
          />
        </Link>
        <div className="right">
          <h1 className="blog-head">Machu Picchu</h1>
          <p className="blog-definition">
            This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram
            Bingham, who believed it was Vilcabamba.
          </p>
          <Link href={"Components/Machu-Picchu"}>
            <button className="button">
              <span>Read More</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="childContainer">
        <Link href={"./03.jpg"} target="_blank">
          <Image
            className="img1"
            src="/03.jpg"
            alt="Chichén Itzá"
            width={600}
            height={400}
          />
        </Link>
        <div className="right">
          <h1 className="blog-head">Chichén Itzá</h1>
          <p className="blog-definition">
            Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico,
            which flourished in the 9th and 10th centuries CE.
          </p>
          <Link href={"Components/Chichen"}>
            <button className="button">
              <span>Read More</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="childContainer">
        <Link href={"./04.jpg"} target="_blank">
          <Image
            className="img1"
            src="/04.jpg"
            alt="Petra"
            width={600}
            height={400}
          />
        </Link>
        <div className="right">
          <h1 className="blog-head">Petra</h1>
          <p className="blog-definition">
            The ancient city of Petra, Jordan, is located in a remote valley,
            nestled among sandstone mountains.
          </p>
          <Link href={"Components/Petra"}>
            <button className="button">
              <span>Read More</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="childContainer">
        <Link href={"./05.jpg"} target="_blank">
          <Image
            className="img1"
            src="/05.jpg"
            alt="Colosseum"
            width={600}
            height={400}
          />
        </Link>
        <div className="right">
          <h1 className="blog-head">Colosseum</h1>
          <p className="blog-definition">
            The Colosseum in Rome was built in the first century by order of the
            Emperor Vespasian.
          </p>
          <Link href={"Components/Colosseum"}>
            <button className="button">
              <span>Read More</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="childContainer">
        <Link href={"./06.jpg"} target="_blank">
          <Image
            className="img1"
            src="/06.jpg"
            alt="Great Wall of China"
            width={600}
            height={400}
          />
        </Link>
        <div className="right">
          <h1 className="blog-head">Great Wall of China</h1>
          <p className="blog-definition">
            Great might be an understatement. One of the world’s largest
            building-construction projects.
          </p>
          <Link href={"Components/Great"}>
            <button className="button">
              <span>Read More</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
