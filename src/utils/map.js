export const imageMap = (imageList) => {
  return imageList.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
