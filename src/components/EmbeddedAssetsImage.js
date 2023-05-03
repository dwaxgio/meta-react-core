import image from "../assets/images/GitHub_image.jpg";

const EmbeddedAssetsImage = () => {
  const imageUrl =
    "https://marketing4ecommerce.net/wp-content/uploads/2018/06/GitHub-logo-2-imagen.jpg";

  return (
    <>
      <img height={200} src={image} alt="Image description" />
      <img
        height={200}
        src={require("../assets/images/GitHub_image.jpg")}
        alt="Image description"
      />
      <img height={200} src={imageUrl} alt="Image description" />
    </>
  );
};

export default EmbeddedAssetsImage;
