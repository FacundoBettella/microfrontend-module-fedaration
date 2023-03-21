import faker from "faker";

const mount = (element) => {
  let products = "";

  for (let i = 0; i < 6; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</>`;
  }

  element.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-only-products");

  //   Assuming our container doesn't have an element with id 'dev-only-products'...."
  if (element) {
    // Running products in isolation
    mount(element);
  }
}

export { mount };

