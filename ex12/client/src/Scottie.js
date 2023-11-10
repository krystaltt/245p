import "./Scottie.css";
import scottie_p from "./image/scottie.jpeg";

function Scottie() {
  return (
    <>
      <article>
        <img src={scottie_p} alt="scottie"></img>
        <h1>Scottish Terrier</h1>
        <p>
          The Scottish Terrier, or Scottie dog, is a small and sturdy breed
          renowned for its distinctive appearance, including a wiry coat and
          bushy eyebrows.
        </p>
        <p>
          Known for their bravery and loyalty, Scotties make excellent watchdogs
          and loving companions, forming strong bonds with their families.
        </p>
      </article>
    </>
  );
}

export default Scottie;
