function cone(radius, height) {
  let volume = Math.PI * radius ** 2 * (height / radius);
  let area =
    Math.PI * radius * Math.sqrt(radius ** 2 + height ** 2) +
    Math.PI * radius ** 2;
  console.log(`volume = ${volume.toFixed(4)} \narea = ${area.toFixed(4)}`);
}
cone(3, 5);
cone(3.3, 7.8);
