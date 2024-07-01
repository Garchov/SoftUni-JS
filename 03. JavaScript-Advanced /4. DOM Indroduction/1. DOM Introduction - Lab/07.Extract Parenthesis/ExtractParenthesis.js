function extract(elementId) {
  let element = document.getElementById(elementId);
  let text = element.textContent;
  let regex = /\(([^\(\)]+)\)/gm;
  const matches = element.textContent.matchAll(regex);

  let result = Array.from(matches)
    .map((match) => match[1])
    .join("; ");
  return result;
}
