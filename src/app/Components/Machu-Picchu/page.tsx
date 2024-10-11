import Image from "next/image";
export default function Machu() {
  return (
    <div className="image11">
      <div className="second">
        <Image
          className="imageSize"
          src="/02.jpg" // Path to your image
          alt="My Image"
          width={500} // Width of the image in pixels
          height={300} // Height of the image in pixels
        />
      </div>
      <h3 className="h3">Machu Picchu</h3>

      <p className="p">
        This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram
        Bingham, who believed it was Vilcabamba, a secret Incan stronghold used
        during the 16th-century rebellion against Spanish rule. Although that
        claim was later disproved, the purpose of Machu Picchu has confounded
        scholars. Bingham believed it was home to the “Virgins of the Sun,”
        women who lived in convents under a vow of chastity. Others think that
        it was likely a pilgrimage site, while some believe it was a royal
        retreat. (One thing it apparently should not be is the site of a beer
        commercial. In 2000 a crane being used for such an ad fell and cracked a
        monument.) What is known is that Machu Picchu is one of the few major
        pre-Columbian ruins found nearly intact. Despite its relative isolation
        high in the Andes Mountains, it features agricultural terraces, plazas,
        residential areas, and temples.
      </p>
    </div>
  );
}
