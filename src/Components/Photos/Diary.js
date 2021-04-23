import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";

import client from "../../client";
import "../Styles/Diary.css";
import Modal from "../Modal";

export default function Diary() {
  const [photos, setPhotos] = useState([]);
  const [showModal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(1);
  const builder = imageUrlBuilder(client);
  async function fetchData() {
    const result = await client.fetch(`*[_type == 'pics'] | order(_createdAt)`);
    setPhotos(result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleKeyDown = (e) => {
    if (e === "ArrowRight") {
      setModalImage((prevState) => prevState + 1);
    } else if (e === "ArrowLeft") {
      setModalImage((prevState) => prevState - 1);
    }
  };
  return (
    <>
      {photos[modalImage] !== undefined ? (
        <Modal
          show={showModal}
          setModal={setModal}
          handleKeyDown={handleKeyDown}
        >
          <img
            src={builder
              .image(photos[modalImage].picture)
              .auto("format")
              .width(500)
              .height(700)
              .format("webp")
              .url()}
            alt={""}
          />
        </Modal>
      ) : null}
      <div className="photo-grid">
        {photos.map((pic, index) => {
          return (
            <img
              src={builder
                .image(pic.picture)
                .auto("format")
                .width(200)
                .height(200)
                .format("webp")
                .url()}
              alt={""}
              key={pic._id}
              onClick={() => {
                setModal(!showModal);
                setModalImage(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
}
