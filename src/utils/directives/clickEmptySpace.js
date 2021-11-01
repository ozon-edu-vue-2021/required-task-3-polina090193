export default {
  bind(el, binding, vnode) {
    el.clickOutsideElement = (event) => {
      let isEmpty = false,
        elm = event.target;

      if (!elm.classList.contains("table") && !elm.classList.contains("menu")) {
        while (!!elm && elm !== document.body) {
          if (
            elm.classList.contains("table") ||
            elm.classList.contains("menu")
          ) {
            isEmpty = true;
            break;
          }
          elm = elm.parentNode;
        }
      }

      if (!isEmpty) {
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener("click", el.clickOutsideElement, false);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideElement);
  },
};
