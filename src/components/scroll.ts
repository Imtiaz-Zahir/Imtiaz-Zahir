export default function scrollDown(m) {
  const text =
    m.target.innerText == "CONTACT NOW" || m.target.innerText == "HIRE ME NOW"
      ? "contact"
      : m.target.innerText;
  document.getElementById(text.toLowerCase())?.scrollIntoView();
}