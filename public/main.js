function toggleSlideover(){
  document.getElementById('slideover-container').classList.toggle('invisible');
  document.getElementById('slideover-bg').classList.toggle('opacity-0');
  document.getElementById('slideover-bg').classList.toggle('opacity-50');
  document.getElementById('slideover').classList.toggle('translate-x-full');
}

const selection = document.getElementById("stateSelection")
let value = selection.options[selection.selectedIndex]
let btn = document.getElementById("btn")

btn.onclick = async(event) => {
  let data = await fetch(`/resources/${selection.value}`)
  console.log(data)
  let jsonData = await data.json()
  let stateText = document.getElementById("stateName")
  stateText.innerText = jsonData.state
  let notifyText = document.getElementById("notify")
  notifyText.innerText = jsonData.notify
  let withdrawalText = document.getElementById("withdrawal")
  withdrawalText.innerText = jsonData.withdrawal
  let instructorText = document.getElementById("instructor")
  instructorText.innerText = jsonData.instructor
  let daysText = document.getElementById("days")
  daysText.innerText = jsonData.days
  let attendanceText = document.getElementById("attendance")
  attendanceText.innerText = jsonData.attendance
  let gradesText = document.getElementById("grades")
  gradesText.innerText = jsonData.grades
  let immunizationsText = document.getElementById("immunizations")
  immunizationsText.innerText = jsonData.immunizations
  let testingText = document.getElementById("testing")
  testingText.innerText = jsonData.testing
  let subjectsText = document.getElementById("subjects")
  subjectsText.innerText = jsonData.subjects
  let aboutText = document.getElementById("aboutLink")
  aboutText.innerText = "A link to the state's department of education section on homeschooling:"
  let linkText = document.getElementById("link")
  linkText.innerText = jsonData.link
  linkText.href = jsonData.link
}