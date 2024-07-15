import { useCatImage } from "../hooks/useCatImage";
import "../styles/app.scss";

export function Cat() {
  const { imageUrl } = useCatImage({ fact: "Gato Ejemplo" });

  return (
    <>
      <div className="c-cat">
        {imageUrl && <img className="c-cat__img" src={imageUrl} />}
      </div>
    </>
  );
}
