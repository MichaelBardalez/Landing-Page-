const countEl = document.getElementById("counter_views");

updateVisitCount();

function updateVisitCount() {
  fetch(
    "https://api.countapi.xyz/update/https://michaelbardalez.github.io/Landing-Page-/?amount=1"
  )
    .then((res) => res.json())
    .then((res) => {
      countEl.innerText = res.value;
    });
}
