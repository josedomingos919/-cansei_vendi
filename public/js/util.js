var getData = async () => {
  return fetch(
    "https://dptafza4tn3d0.cloudfront.net/sqatiql8m35w9nm15hwdw0a.json",
    {
      method: "GET",
    }
  )
    .then((e) => e.json())
    .then((e) => {
      return e;
    });
};

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
