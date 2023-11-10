import "./Westie.css";
import westie_p from "./image/westie.jpeg";

function Westie() {
  return (
    <>
      <article>
        <img src={westie_p} alt="westie"></img>
        <h1>West Highland White Terrier</h1>
        <p>
          The West Highland White Terrier, often affectionately called the
          Westie, is a charming and energetic small breed with a distinctive
          white coat that gives it a delightful appearance.
        </p>
        <p>
          Known for their friendly and outgoing nature, Westies are playful and
          confident companions, making them popular family pets and excellent
          watchdogs due to their alert and lively personality.
        </p>
      </article>
    </>
  );
}

export default Westie;
