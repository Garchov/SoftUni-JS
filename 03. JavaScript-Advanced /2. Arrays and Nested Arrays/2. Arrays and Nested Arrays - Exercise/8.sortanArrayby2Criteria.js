function sortAnArrayBy2Criteria(data) {
  let sortingCriteria = data
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .map((x) => console.log(x));
}
sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]);
