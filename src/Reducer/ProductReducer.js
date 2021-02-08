export const initailaState = {
  products: [
    {
      id: 1,
      name: "Pepe Jeans Men's Printed Slim fit T-Shirt",
      image:
        "https://m.media-amazon.com/images/I/71Dei4mByZL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 999,
      discountedprice: 429,
      discount: 57,
      quantity: 2,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 2,
      name: "Fenoix Men's Regular Fit T-Shirt",
      image:
        "https://m.media-amazon.com/images/I/61Rc-t7Ep7L._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 999,
      discountedprice: 349,
      discount: 65,
      quantity: 5,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 3,
      name: "DENDLESS S Women's T-Shirts",
      image:
        "https://m.media-amazon.com/images/I/6178C5Z4mUL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 399,
      discountedprice: 199,
      discount: 50,
      quantity: 1,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 4,
      name:
        "Fabricorn Plain Stylish Mustard Yellow Cross V-Neck Cotton Tshirt for Women",
      image:
        "https://m.media-amazon.com/images/I/714tcwBKYFL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 1199,
      discountedprice: 379,
      discount: 68,
      quantity: 5,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 5,
      name: "Girls' Net Semi-Stitched Lehenga Choli",
      image:
        "https://m.media-amazon.com/images/I/71k8eJjvlmL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 1999,
      discountedprice: 575,
      discount: 71,
      quantity: 4,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 6,
      name: "Boys cotton dress",
      image:
        "https://github.com/shakilkhan12/Youtube-React-Redux-eCommerce/blob/main/public/images/1.jpg?raw=true",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 1999,
      discountedprice: 575,
      discount: 71,
      quantity: 4,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 7,
      name: "Girls' Net Semi-Stitched Lehenga Choli",
      image:
        "https://m.media-amazon.com/images/I/71k8eJjvlmL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 1999,
      discountedprice: 575,
      discount: 71,
      quantity: 4,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 8,
      name: "Girls' Net Semi-Stitched Lehenga Choli",
      image:
        "https://m.media-amazon.com/images/I/71k8eJjvlmL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 1999,
      discountedprice: 575,
      discount: 71,
      quantity: 4,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 9,
      name: "Girls' Net Semi-Stitched Lehenga Choli",
      image:
        "https://m.media-amazon.com/images/I/71k8eJjvlmL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 1999,
      discountedprice: 575,
      discount: 71,
      quantity: 4,
      freedelivery: "FREE Delivery over ₹499. ",
    },
    {
      id: 10,
      name: "Girls' Net Semi-Stitched Lehenga Choli",
      image:
        "https://m.media-amazon.com/images/I/71k8eJjvlmL._AC_UL480_FMwebp_QL65_.jpg",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
      price: 1999,
      discountedprice: 575,
      discount: 71,
      quantity: 4,
      freedelivery: "FREE Delivery over ₹499. ",
    },
  ],
  product: {},
  count: [],
  nocount: null,
};

const ProductReducer = (state = initailaState, action) => {
  console.log(action);
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    case "COUNT":
      return {
        ...state,
        count: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
        nocount: action.count,
      };

    default:
      return state;
  }
};
export default ProductReducer;
