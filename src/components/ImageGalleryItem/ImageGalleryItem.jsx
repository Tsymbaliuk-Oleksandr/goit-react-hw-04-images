import { useState } from "react";
import Modal from "components/Modal";
import PropTypes from "prop-types";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <GalleryItem>
      <GalleryImage
        src={webformatURL}
        alt="image"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </GalleryItem>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propsTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
