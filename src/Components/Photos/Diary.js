import React, { useState, useEffect, useRef } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { useSwipeable } from "react-swipeable";

import useMediaQuery from "../../Utils/useMediaQuery";
import client from "../../client";
import "../Styles/Diary.css";
import Modal from "../Modal";

export default function Diary(props) {
  const [photos, setPhotos] = useState([]);
  const [showModal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(1);
  const [isImgLoaded, setImgLoaded] = useState(false);

  const builder = imageUrlBuilder(client);

  const thumbnailBreak = useMediaQuery(700);
  const fullSizeBreak = useMediaQuery(425);
  const smallPhoneBreak = useMediaQuery(375);

  async function fetchData() {
    const result = await client.fetch(
      `*[_type == 'pics'] | order(_createdAt desc)`
    );
    setPhotos(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const picRef = useRef();

  const handleKeyDown = (e) => {
    switch (e) {
      case "ArrowRight":
        if (modalImage === photos.length - 1) {
          return setModal(false);
        } else {
          setModalImage((prevState) => prevState + 1);
        }
        break;
      case "ArrowLeft":
        if (modalImage === 0) {
          return setModal(false);
        } else {
          setModalImage((prevState) => prevState - 1);
        }
        break;
      case "Escape":
        setModal(false);
        break;
      default:
        return null;
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setModalImage((prevState) => prevState + 1);
    },
    onSwipedRight: () => {
      setModalImage((prevState) => prevState - 1);
    },
  });
  return (
    <div className={props.nav ? "photosScreen" : "photos"}>
      {photos[modalImage] !== undefined ? (
        <Modal
          show={showModal}
          setModal={setModal}
          handleKeyDown={handleKeyDown}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
            ref={picRef}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
              {...handlers}
            >
              {modalImage > 0 && !fullSizeBreak ? (
                <span
                  onClick={() => {
                    setModalImage((prevState) => prevState - 1);
                  }}
                >
                  &#8668;
                </span>
              ) : (
                <span
                  style={{
                    padding: "40px 33px",
                    display: fullSizeBreak ? "none" : "block",
                  }}
                ></span>
              )}
              {!isImgLoaded && (
                <span style={{ fontSize: "12px" }}>...Loading</span>
              )}
              <img
                src={builder
                  .image(photos[modalImage].picture)
                  .auto("format")
                  .width(fullSizeBreak ? 321 : 500)
                  .height(fullSizeBreak ? 450 : 700)
                  .quality(100)
                  .dpr(1)
                  .url()}
                alt={""}
                onClick={() => {
                  setModal(!showModal);
                  setImgLoaded(false);
                }}
                onLoad={() => {
                  setImgLoaded(true);
                }}
                className="modalImage"
                style={{
                  border: isImgLoaded ? "5px solid white" : "none",
                }}
              />
              {modalImage !== photos.length - 1 && !fullSizeBreak ? (
                <span
                  onClick={() => {
                    setModalImage((prevState) => prevState + 1);
                  }}
                >
                  &#8669;
                </span>
              ) : (
                <span
                  style={{
                    padding: "40px 33px",
                    display: fullSizeBreak ? "none" : "block",
                  }}
                ></span>
              )}
            </div>
            <span
              style={{ fontSize: "1rem", paddingTop: "1rem" }}
              className="modalTitle"
            >
              {photos[modalImage].title}
            </span>
          </div>
        </Modal>
      ) : null}
      <div className="photo-grid">
        {photos.map((pic, index) => {
          return (
            <img
              src={builder
                .image(pic.picture)
                .auto("format")
                .width(smallPhoneBreak ? 300 : thumbnailBreak ? 190 : 230)
                .height(smallPhoneBreak ? 300 : thumbnailBreak ? 190 : 230)
                .format("webp")
                .url()}
              alt={""}
              key={pic._id}
              onClick={() => {
                setModal(!showModal);
                setModalImage(index);
                picRef.current.focus();
                window.scrollTo(0, 0);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
