function roadRadar(speed, area) {
  let limit = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  if (speed <= limit[area]) {
    console.log(`Driving ${speed} km/h in a ${limit[area]} zone`);
  } else {
    let diff = speed - limit[area];
    let status = (diff) => {
      if (diff <= 20) {
        return "speeding";
      } else if (diff <= 40) {
        return "excessive speeding";
      } else {
        return "reckless driving";
      }
    };
    console.log(
      `The speed is ${diff} km/h faster than the allowed speed of ${
        limit[area]
      } - ${status(diff)}`
    );
  }
}
roadRadar(40, "city");
// roadRadar(200, "motorway");
// roadRadar(120, "residential");
