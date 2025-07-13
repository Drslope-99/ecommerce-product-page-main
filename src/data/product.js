import Product1 from "../assets/images/image-product-1.jpg";
import Product2 from "../assets/images/image-product-2.jpg";
import Product3 from "../assets/images/image-product-3.jpg";
import Product4 from "../assets/images/image-product-4.jpg";

import Thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

export const productImage = [
  { thumbnail: Thumbnail1, full: Product1 },
  { thumbnail: Thumbnail2, full: Product2 },
  { thumbnail: Thumbnail3, full: Product3 },
  { thumbnail: Thumbnail4, full: Product4 },
];

export const productData = {
  id: 1,
  company: "sneaker company",
  image: productImage[0].thumbnail,
  title: "fall limited edition sneakers",
  description: `These low-profile sneakers are your perfect casual
    wear companion. Featuring a durable rubber outer sole,
    they’ll withstand everything the weather can offer.`,
  price: 250,
  discount: 50,
  quantity: 10,
};
