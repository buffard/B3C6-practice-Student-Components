// Q1. Create a new project.
// Q2. Paste the array of student objects above into your JavaScript file.
// Q3. Put the h1, section, and aside functions into your JavaScript file.
// Q4. Add the following styles to your CSS.
// Q5. Add a container article to your HTML.
// Q6. Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.


// Q2
const students = [
  {
      name: "Chris Miller",
      class: "History",
      info: "Failed last exam",
      score: 59
  },
  {
      name: "Courtney Seward",
      class: "History",
      info: "Has completed all homework",
      score: 91
  },
  {
      name: "Garrett Ward",
      class: "History",
      info: "Wonderful at helping other students",
      score: 88
  },
  {
      name: "John Dulaney",
      class: "History",
      info: "Has never missed a class or exam",
      score: 92
  },
  {
      name: "Greg Lawrence",
      class: "History",
      info: "Sub-par performance all around",
      score: 64
  },
  {
      name: "Leah Duvic",
      class: "History",
      info: "Wonderful student",
      score: 97
  },
  {
      name: "Jesse Page",
      class: "History",
      info: "Smokes too much. Distracting.",
      score: 76
  },
  {
      name: "Kevin Haggerty",
      class: "History",
      info: "Falls asleep in class",
      score: 79
  },
  {
      name: "Max Wolf",
      class: "History",
      info: "Talks too much",
      score: 83
  },
  {
      name: "Lissa Goforth",
      class: "History",
      info: "Asks pointless, unrelated questions",
      score: 78
  },
  {
      name: "Tyler Bowman",
      class: "History",
      info: "When was the last time he attended class?",
      score: 48
  },
  {
      name: "Ray Medrano",
      class: "History",
      info: "Needs to contribute to in-class discussions",
      score: 95
  }
]

// Q3
const h1 = (title, style) => {
  return `<h1 class= "xx-large  ${style}">${title}</h1>`
}

const section = (title, style) => {
  return `<section class="bordered dashed ${style}">${title}</section>`
}

const aside = (title, style) => {
  return `<aside class="${style}">${title}</aside>`
}

const student = (name, clazz, info, score) => `
    <div id="student">
        ${h1(name, score)}
        ${section(clazz, "section--padded")}
        ${aside(info, "pushRight")}

    </div>
`
// Q6
// Q6. Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

students.forEach((currStudent) => {
  let studentComponent = ""
  if (currStudent.score >= 60) {
      studentComponent = student(currStudent.name, currStudent.class, currStudent.info, "passing")
  } else {
      studentComponent = student(currStudent.name, currStudent.class, currStudent.info, "failing")
  }
  document.querySelector("#container").innerHTML += `
  ${studentComponent}
  `
})