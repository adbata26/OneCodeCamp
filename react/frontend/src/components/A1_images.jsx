export default function A1_images({ path }) {
  const image = require("../assets/images/" + path);

  return <img src={image} height="300" width="100%" />;
}
