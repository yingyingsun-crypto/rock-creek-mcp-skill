const plans = {
  wander: {
    label: "ON FOOT · HALF DAY",
    distance: "Easy pace",
    title: "Creekside reset",
    summary: "Start near the Nature Center area, follow a wooded trail, and leave enough time to stop beside the creek.",
    stops: [
      ["09:00", "Arrive at Glover Road", "Parking and trail access"],
      ["10:00", "Follow the creek", "Hiking · wildlife watching"],
      ["12:00", "Picnic break", "Pack out everything you bring"]
    ]
  },
  ride: {
    label: "BY BIKE · 2–3 HOURS",
    distance: "Moderate pace",
    title: "Two wheels, one green corridor",
    summary: "Use the park’s roads and multi-use routes for a longer look at the landscape. Check alerts before riding because closures can change access.",
    stops: [
      ["08:30", "Start early", "Cooler air · lighter traffic"],
      ["09:15", "Ride Beach Drive", "Follow posted access signs"],
      ["10:30", "Creekside pause", "Water · snack · reset"]
    ]
  },
  history: {
    label: "HISTORY · HALF DAY",
    distance: "Short walks",
    title: "Stone, water, and 1890",
    summary: "Pair the park landscape with one of its historic places. Confirm individual site hours before leaving.",
    stops: [
      ["10:00", "Begin at Peirce Mill", "Historic mill landscape"],
      ["11:15", "Walk the valley", "Creek ecology · layered history"],
      ["12:30", "Lunch outdoors", "Choose a designated picnic area"]
    ]
  }
};

const buttons = document.querySelectorAll(".mode");
const stops = document.querySelector("#plan-stops");

function selectPlan(key) {
  const plan = plans[key];
  document.querySelector("#plan-label").textContent = plan.label;
  document.querySelector("#plan-distance").textContent = plan.distance;
  document.querySelector("#plan-title").textContent = plan.title;
  document.querySelector("#plan-summary").textContent = plan.summary;
  stops.innerHTML = plan.stops.map(([time, title, note]) =>
    `<li><span>${time}</span><b>${title}</b><small>${note}</small></li>`
  ).join("");
  buttons.forEach((button) => {
    const active = button.dataset.plan === key;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

buttons.forEach((button) => button.addEventListener("click", () => selectPlan(button.dataset.plan)));
