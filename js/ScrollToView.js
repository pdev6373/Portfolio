export default function ScrollToView(pathName, element, margin) {
  if (location.pathname == pathName) {
    window.scrollTo({
      top: element + margin,
      behavior: "smooth",
    });
  }
}
