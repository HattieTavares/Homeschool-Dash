function toggleSlideover(){
  document.getElementById('slideover-container').classList.toggle('invisible');
  document.getElementById('slideover-bg').classList.toggle('opacity-0');
  document.getElementById('slideover-bg').classList.toggle('opacity-50');
  document.getElementById('slideover').classList.toggle('translate-x-full');
}

const selectState = document.getElementById("states")

selectState.addEventListener("click", event => {
  console.log("clicked")
  let stateId = selectState.getAttribute("data-id")
  fetch(`/resources/${stateId}`)
  .then((response) => response.json())
  .then((data) => 

  console.log(data));

  document.getElementById("stateName").innerText = data.state
})