export default function HomeFunctionalities(whatIDo, largeView, smallView) {
  window.addEventListener("resize", () => {
    window.innerWidth > 510
      ? (whatIDo.innerHTML = largeView)
      : (whatIDo.innerHTML = smallView);
  });
}
