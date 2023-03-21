import faker from "faker";

const mount = (element) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart`;

  element.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-only-cart");

  if (element) {
    mount(element);
  }
}

export { mount };
