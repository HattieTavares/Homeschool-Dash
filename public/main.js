function toggleSlideover(){
  document.getElementById('slideover-container').classList.toggle('invisible');
  document.getElementById('slideover-bg').classList.toggle('opacity-0');
  document.getElementById('slideover-bg').classList.toggle('opacity-50');
  document.getElementById('slideover').classList.toggle('translate-x-full');
}

const subjectAverages = [...document.querySelectorAll('.dashGrades tbody tr')].map(row => [row.children[0].innerText, +row.children[1].innerText]);

const doc = new PDFDocument();

// pipe the document to a blob
const stream = doc.pipe(blobStream());

// Background Color
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#e0e0e0');

// Set text color and first few font sizes
doc.fillColor('#2b3a67').fontSize(30)
doc.text('Grades', { align: 'center' });
doc.text('Subject', { align: 'left', continued: true });
doc.text('Average', { align: 'right' });

doc.fontSize(20)

doc.initForm()
for (const [subject, average] of subjectAverages) {
        // Draw the horizontal line
        doc.moveDown(0.5);

        doc.strokeColor('#959db3')

        doc.moveTo(0 + 70, doc.y)
                .lineTo(doc.page.width - 70, doc.y)
                .stroke();

        doc.moveDown(0.5);

        doc.text(subject, { align: 'left', continued: true });
        doc.formText(subject + '-average', doc.page.width - 175, doc.y - 5, 100, 25, { value: average.toString() });
        // Draw some blank text to get the cursor to the right spot
        doc.text('', { align: 'right' });

        doc.moveDown(0.5);
}

// get a blob when you're done
doc.end();

const a = document.createElement("a");
document.body.appendChild(a);
a.style = "display: none";

let blob;

function downloadPDF() {
  if (!blob) return;
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = 'grades.pdf';
  a.click();
  window.URL.revokeObjectURL(url);
}

stream.on("finish", function() {
  // get a blob you can do whatever you like with
  blob = stream.toBlob("application/pdf");

  // or get a blob URL for display in the browser
  const url = stream.toBlobURL("application/pdf");
  const iframe = document.querySelector("#pdf");
  iframe.src = url;
  // Increase the height of the iframe to fit the PDF
  iframe.style.height = 200 + (50 * subjectAverages.length) + 'px';
});

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
  aboutText.innerText = "A link to the current state's department of education section on homeschooling:"
  let linkText = document.getElementById("link")
  linkText.innerText = jsonData.link
  linkText.href = jsonData.link
}