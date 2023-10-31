let page = document.getElementById('page');
let footer = document.getElementById('footer');
let button = document.getElementById('button');
let buttonTheme = document.getElementById('switch');

function toggleMode() {
  let html = document.documentElement
  html.classList.toggle("light");

  let moonStars = buttonTheme.querySelector('.moon-stars')
  moonStars.classList.toggle('hide');

  let sun = buttonTheme.querySelector('.sun');
  sun.classList.toggle('hide');
}



button.textContent = 'EN';

function languageMode() {
  
  if(button.textContent == 'EN') {
    button.textContent = 'PT';
  } else {
    button.textContent = 'EN';
  }
  
  textPortuguese();
  textEnglish();
};

function textPortuguese() {
  let titleInfo = page.querySelector('.title-info');
  titleInfo.classList.toggle('hide');

  let titleContact = page.querySelector('.title-contact');
  titleContact.classList.toggle('hide');

  let skillsSection = page.querySelector('.skills-section');
  skillsSection.classList.toggle('hide');

  let experience = page.querySelector('.experience');
  experience.classList.toggle('hide');

  let umbanguDate = page.querySelector('.umbangu-date');
  umbanguDate.classList.toggle('hide');

  let umbanguChoresOne = page.querySelector('.umbangu-chores-1');
  umbanguChoresOne.classList.toggle('hide');

  let umbanguChoresTwo = page.querySelector('.umbangu-chores-2');
  umbanguChoresTwo.classList.toggle('hide');

  let umbanguChoresThree = page.querySelector('.umbangu-chores-3');
  umbanguChoresThree.classList.toggle('hide');

  let trashirtPosition = page.querySelector('.trashirt-position');
  trashirtPosition.classList.toggle('hide');

  let trashirtDate = page.querySelector('.trashirt-date');
  trashirtDate.classList.toggle('hide');

  let trashirtChoresOne = page.querySelector('.trashirt-chores-1');
  trashirtChoresOne.classList.toggle('hide');

  let trashirtChoresTwo = page.querySelector('.trashirt-chores-2');
  trashirtChoresTwo.classList.toggle('hide');

  let trashirtChoresThree = page.querySelector('.trashirt-chores-3');
  trashirtChoresThree.classList.toggle('hide');

  let carrefourPosition = page.querySelector('.carrefour-position');
  carrefourPosition.classList.toggle('hide');

  let carrefourDateJob = page.querySelector('.carrefour-date');
  carrefourDateJob.classList.toggle('hide');

  let carrefourChoresOne = page.querySelector('.carrefour-chores-1');
  carrefourChoresOne.classList.toggle('hide');

  let carrefourChoresTwo = page.querySelector('.carrefour-chores-2');
  carrefourChoresTwo.classList.toggle('hide');

  let carrefourChoresThree = page.querySelector('.carrefour-chores-3');
  carrefourChoresThree.classList.toggle('hide');

  let carrefourChoresFour = page.querySelector('.carrefour-chores-4');
  carrefourChoresFour.classList.toggle('hide');

  let timPosition = page.querySelector('.tim-position');
  timPosition.classList.toggle('hide');

  let timChoresOne = page.querySelector('.tim-chores-1');
  timChoresOne.classList.toggle('hide');

  let timChoresTwo = page.querySelector('.tim-chores-2');
  timChoresTwo.classList.toggle('hide');

  let timChoresThree = page.querySelector('.tim-chores-3');
  timChoresThree.classList.toggle('hide');

  let timChoresFour = page.querySelector('.tim-chores-4');
  timChoresFour.classList.toggle('hide');

  let education = page.querySelector('.skills-section-education');
  education.classList.toggle('hide');

  let educationCourseOne = page.querySelector('.education-course-1');
  educationCourseOne.classList.toggle('hide');

  let educationCourseTwo = page.querySelector('.education-course-2');
  educationCourseTwo.classList.toggle('hide');

  let educationCourseThree = page.querySelector('.education-course-3');
  educationCourseThree.classList.toggle('hide');

  let languages = page.querySelector('.skills-section-languages');
  languages.classList.toggle('hide');

  let languageSpeakOne = page.querySelector('.language-speak-1');
  languageSpeakOne.classList.toggle('hide');

  let languageLevelOne = page.querySelector('.language-level-1');
  languageLevelOne.classList.toggle('hide');

  let languageSpeakTwo = page.querySelector('.language-speak-2');
  languageSpeakTwo.classList.toggle('hide');

  let languageLevelTwo = page.querySelector('.language-level-2');
  languageLevelTwo.classList.toggle('hide');

  let languageSpeakThree = page.querySelector('.language-speak-3');
  languageSpeakThree.classList.toggle('hide');

  let languageLevelThree = page.querySelector('.language-level-3');
  languageLevelThree.classList.toggle('hide');

  let languageSpeakFour = page.querySelector('.language-speak-4');
  languageSpeakFour.classList.toggle('hide');

  let languageLevelFour = page.querySelector('.language-level-4');
  languageLevelFour.classList.toggle('hide');

  let developed = footer.querySelector('.footer');
  developed.classList.toggle('hide');
}

function textEnglish() {
  let titleInfoEnglish = page.querySelector('.title-info-english');
  titleInfoEnglish.classList.toggle('hide');

  let titleContactEnglish = page.querySelector('.title-contact-english');
  titleContactEnglish.classList.toggle('hide');
  
  let skillsSectionEnglish = page.querySelector('.skills-section-english');
  skillsSectionEnglish.classList.toggle('hide');

  let experienceEnglish = page.querySelector('.experience-english');
  experienceEnglish.classList.toggle('hide');

  let umbanguDateEnglish = page.querySelector('.umbangu-date-english');
  umbanguDateEnglish.classList.toggle('hide');

  let umbanguChoresOneEnglish = page.querySelector('.umbangu-chores-1-english');
  umbanguChoresOneEnglish.classList.toggle('hide');

  let umbanguChoresTwoEnglish = page.querySelector('.umbangu-chores-2-english');
  umbanguChoresTwoEnglish.classList.toggle('hide');

  let umbanguChoresThreeEnglish = page.querySelector('.umbangu-chores-3-english');
  umbanguChoresThreeEnglish.classList.toggle('hide');

  let trashirtPositionEnglish = page.querySelector('.trashirt-position-english');
  trashirtPositionEnglish.classList.toggle('hide');

  let trashirDateEnglish = page.querySelector('.trashirt-date-english');
  trashirDateEnglish.classList.toggle('hide');

  let trashirtChoresOneEnglish = page.querySelector('.trashirt-chores-1-english');
  trashirtChoresOneEnglish.classList.toggle('hide');

  let trashirtChoresTwoEnglish = page.querySelector('.trashirt-chores-2-english');
  trashirtChoresTwoEnglish.classList.toggle('hide');

  let trashirtChoresThreeEnglish = page.querySelector('.trashirt-chores-3-english');
  trashirtChoresThreeEnglish.classList.toggle('hide');

  let carrefourPositionEnglish = page.querySelector('.carrefour-position-english');
  carrefourPositionEnglish.classList.toggle('hide');

  let carrefourDateJobEnglish = page.querySelector('.carrefour-date-english');
  carrefourDateJobEnglish.classList.toggle('hide');

  let carrefourChoresOneEnglish = page.querySelector('.carrefour-chores-1-english');
  carrefourChoresOneEnglish.classList.toggle('hide');

  let carrefourChoresTwoEnglish = page.querySelector('.carrefour-chores-2-english');
  carrefourChoresTwoEnglish.classList.toggle('hide');

  let carrefourChoresThreeEnglish = page.querySelector('.carrefour-chores-3-english');
  carrefourChoresThreeEnglish.classList.toggle('hide');

  let carrefourChoresFourEnglish = page.querySelector('.carrefour-chores-4-english');
  carrefourChoresFourEnglish.classList.toggle('hide');

  let timPositionEnglish = page.querySelector('.tim-position-english');
  timPositionEnglish.classList.toggle('hide');

  let timChoresOneEnglish = page.querySelector('.tim-chores-1-english');
  timChoresOneEnglish.classList.toggle('hide');

  let timChoresTwoEnglish = page.querySelector('.tim-chores-2-english');
  timChoresTwoEnglish.classList.toggle('hide');

  let timChoresThreeEnglish = page.querySelector('.tim-chores-3-english');
  timChoresThreeEnglish.classList.toggle('hide');

  let timChoresFourEnglish = page.querySelector('.tim-chores-4-english');
  timChoresFourEnglish.classList.toggle('hide');

  let educationEnglish = page.querySelector('.skills-section-education-english');
  educationEnglish.classList.toggle('hide');

  let educationCourseOneEnglish = page.querySelector('.education-course-1-english');
  educationCourseOneEnglish.classList.toggle('hide');

  let educationCourseTwoEnglish = page.querySelector('.education-course-2-english');
  educationCourseTwoEnglish.classList.toggle('hide');

  let educationCourseThreeEnglish = page.querySelector('.education-course-3-english');
  educationCourseThreeEnglish.classList.toggle('hide');

  let languagesEnglish = page.querySelector('.skills-section-languages-english');
  languagesEnglish.classList.toggle('hide');

  let languageSpeakOneEnglish = page.querySelector('.language-speak-1-english');
  languageSpeakOneEnglish.classList.toggle('hide');

  let languageLevelOneEnglish = page.querySelector('.language-level-1-english');
  languageLevelOneEnglish.classList.toggle('hide');

  let languageSpeakTwoEnglish = page.querySelector('.language-speak-2-english');
  languageSpeakTwoEnglish.classList.toggle('hide');

  let languageLevelTwoEnglish = page.querySelector('.language-level-2-english');
  languageLevelTwoEnglish.classList.toggle('hide');

  let languageSpeakThreeEnglish = page.querySelector('.language-speak-3-english');
  languageSpeakThreeEnglish.classList.toggle('hide');

  let languageLevelThreeEnglish = page.querySelector('.language-level-3-english');
  languageLevelThreeEnglish.classList.toggle('hide');

  let languageSpeakFourEnglish = page.querySelector('.language-speak-4-english');
  languageSpeakFourEnglish.classList.toggle('hide');
  
  let languageLevelFourEnglish = page.querySelector('.language-level-4-english');
  languageLevelFourEnglish.classList.toggle('hide');

  let developedEnglish = footer.querySelector('.footer-english');
  developedEnglish.classList.toggle('hide');
}