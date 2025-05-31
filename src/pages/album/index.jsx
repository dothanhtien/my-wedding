import { useState } from "react";
import { concept1Images, concept2Images, concept3Images } from "./data";
import { AlbumPageStyledWrapper } from "./style";

const accessAlbumCode = import.meta.env.VITE_ACCESS_ALBUM_CODE;

function AlbumPage() {
  const [visible1, setVisible1] = useState(1);
  const [visible2, setVisible2] = useState(1);
  const [visible3, setVisible3] = useState(1);
  const [lockLoadMore, setLockLoadMore] = useState(true);

  const handleLoadMore = (conceptNo) => {
    if (lockLoadMore) {
      const userInput = prompt("Enter password to see more photos:");
      if (userInput !== accessAlbumCode) {
        alert("Incorrect password");
        return;
      }

      setLockLoadMore(false);
    }

    switch (conceptNo) {
      case 1:
        setVisible1(visible1 + 5);
        break;
      case 2:
        setVisible2(visible2 + 5);
        break;
      case 3:
        setVisible3(visible3 + 5);
        break;
      default:
        break;
    }
  };

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
                onClick={() => handleLoadMore(1)}
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
                onClick={() => handleLoadMore(2)}
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
                onClick={() => handleLoadMore(3)}
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
