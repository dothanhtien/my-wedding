import { useState } from "react";
import { concept1Images, concept2Images, concept3Images } from "./data";
import { AlbumPageStyledWrapper } from "./style";

function AlbumPage() {
  const [visible1, setVisible1] = useState(3);
  const [visible2, setVisible2] = useState(3);
  const [visible3, setVisible3] = useState(3);

  return (
    <AlbumPageStyledWrapper>
      <div className="container">
        <section>
          <h3>Concept 1</h3>
          <div className="albumGrid">
            {concept1Images.slice(0, visible1).map((image, key) => (
              <div key={key} className="albumItem">
                <img src={image.src} alt={`concept1-${key}`} loading="lazy" />
              </div>
            ))}
          </div>
          {visible1 < concept1Images.length && (
            <div className="text-center">
              <button
                onClick={() => setVisible1(visible1 + 5)}
                className="btn btn-danger mb-4"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        <section>
          <h3>Concept 2</h3>
          <div className="albumGrid">
            {concept2Images.slice(0, visible2).map((image, key) => (
              <div key={key} className="albumItem">
                <img src={image.src} alt={`concept2-${key}`} loading="lazy" />
              </div>
            ))}
          </div>
          {visible2 < concept2Images.length && (
            <div className="text-center">
              <button
                onClick={() => setVisible2(visible2 + 5)}
                className="btn btn-danger mb-4"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        <section>
          <h3>Concept 3</h3>
          <div className="albumGrid">
            {concept3Images.slice(0, visible3).map((image, key) => (
              <div key={key} className="albumItem">
                <img src={image.src} alt={`concept3-${key}`} loading="lazy" />
              </div>
            ))}
          </div>
          {visible3 < concept3Images.length && (
            <div className="text-center">
              <button
                onClick={() => setVisible3(visible3 + 5)}
                className="btn btn-danger mb-4"
              >
                Load More
              </button>
            </div>
          )}
        </section>
      </div>
    </AlbumPageStyledWrapper>
  );
}

export default AlbumPage;
