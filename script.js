let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")
let randomButton = document.querySelector("#random")

let students = [
  {
    profileImage: "https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FF596A3DF-A53F-466A-A6EE-2BAD151B5D62%20(1).jpeg?v=1585184163051",
    name: "Jessica A.",
    quote: "I want to be rich one day",
    superlative: "Most funny",
  },
  {
    profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2029.jpeg?v=1585184018505", 
    name: "Fauziya B.",
    quote: "I don't want to be in the picture",
    superlative:"The loudest",
  },
  {
  profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2023.jpeg?v=1585183989070",
  name: "Ruth S.",
  quote:"Doing my hair",
  superlative:"Best hair",
  },
{
  profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2041.jpeg?v=1585183961785",
  name: "Britney A.",
  quote:"Don't lie to yourself",
  superlative:"Best Helper",
},
  {
  profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2027.jpeg?v=1585184031977",
  name: "Mary B.",
  quote:"I didn't create it, people sent it to me.",
  superlative:"Most motivated",
  },
  {
  profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2058.jpeg?v=1585183977931",
  name: "Worokiya T.",
  quote:"Getting ready, wait!",
  superlative:"Best hijab",
  },
  {
  profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2040.jpeg?v=1585184006552",
  name: "Aoussa T.",
  quote:"Talking to other people!",
  superlative:"Most friendly",
  },
  {
  profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2063.jpg?v=1585184986334",
  name: "Nayleah V.",
  quote:"Playing basketball!",
  superlative:"Most encouraging ",
  },
  {
  profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2116.jpg?v=1585530427256",
  name: "Babamayokun",
  quote: "Student Athlete",
  superlative: "Most athletic",
  },
  {
   profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2111.jpg?v=1585530510531",
   name:"Hummu G.",
   quote:"I'm so lazy to do it",
   superlative:"Best makeup",
  },
  {
   profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2088.jpeg?v=1585530445975",
   name:"Lisandro V.",
   quote:"I can do anything!!",
   superlative:"Best helper",
  },
  {
   profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2093.jpg?v=1585530478834",
   name:"Wendy S.",
   quote:"If you ned a mirror, ask me!",
   superlative:"Most likely to study in fashion",
  },
  {
   profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2112.jpg?v=1585530526873",
   name:"Djaliatou B.",
   quote:"Watch Grey's Anatomy!",
   superlative:"Most likely to be a nurse!",
  },
  {
   profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2090.jpg?v=1585530465396",
   name:"Yunaivi R.",
   quote:"Help Me! how you do it?",
   superlative:"Most talkative",
  },
  {
   profileImage:"https://cdn.glitch.com/9fd3adb2-836a-402f-b0c7-9b1372080403%2FIMG_2094.jpg?v=1585530496187",
   name:"Cecilia B.",
   quote:"I like to do makeup!",
   superlative:"Most suportive",
  }
]

let count = 0 
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
let lastStudent = students.length -1

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++;
if(count > lastStudent){
  count=0
}
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count--;
if (count < 0){
  count=lastStudent
}
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  document.querySelector("#quote").innerHTML = students[count].quote
  document.querySelector("#superlative").innerHTML = students[count].superlative
})




