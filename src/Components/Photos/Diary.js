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
  const [offset, setOffset] = useState(null);
  const [imgID, setimgID] = useState("");

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

  const picRef = useRef();
  const gridRef = useRef();
  const winRef = useRef();

  useEffect(() => {
    if (document.getElementsByClassName("photos")[0]) {
      winRef.current = document.getElementsByClassName(
        "photos"
      )[0].clientHeight;
    }
    picRef.current && picRef.current.scrollIntoView({ block: "center" });

    if (photos.length < 1) {
      fetchData();
    }
  }, [modalImage]);

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
    onSwipedUp: () => {
      setModal(!showModal);
      setImgLoaded(false);
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
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
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
                  document
                    .getElementById(`${imgID}`)
                    .scrollIntoView({ block: "center" });
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
      <div className="photo-grid" ref={gridRef}>
        {photos.map((pic, index) => {
          const childrens = Array.from(gridRef.current.children);
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
              id={pic._id}
              onClick={() => {
                setModal(!showModal);
                setModalImage(index);
                picRef.current.focus();
                setOffset(childrens[index].offsetTop);
                setimgID(pic._id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
