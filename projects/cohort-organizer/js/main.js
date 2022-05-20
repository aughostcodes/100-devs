/* =======================
##########################
    DOM SELECTORS
##########################
======================= */

let classContainer = document.querySelector('.class-container');

let classNumberText = document.querySelector('.class-number');
let classDateText = document.querySelector('.class-date');
let classVideo = document.querySelector('.class-video');
let classVideoUrl = document.querySelector('#class-video-url');
let classVideoInfo = document.querySelector('.class-video-info');
let classMaterials = document.querySelector('.class-materials');
let classMaterialsUrl = document.querySelector('#class-materials-url');
let classSolutions = document.querySelector('.class-solutions');
let classSolutionsUrl = document.querySelector('#class-solutions-url');
let classSlides = document.querySelector('.class-slides');
let classSlidesUrl = document.querySelector('#class-slides-url');
let classMotivation = document.querySelector('.class-motivation');
let classMotivationUrl = document.querySelector('#class-motivation-url');
let classCheckin = document.querySelector('.class-checkin');
let classCheckinUrl = document.querySelector('#class-checkin-url');


/* =======================
##########################
    CONSTRUCTORS
##########################
======================= */

function createNewEntryInDom() {
    let classDetails = document.querySelector('.class-details');
    let newEntryDisplay = classDetails.cloneNode(true);
    console.log('newEntryDisplay: ', newEntryDisplay);
    classContainer.appendChild(newEntryDisplay);
}

// newDetailEntry.classList.add('class-details');
// classContainer.appendChild(newDetailEntry);
// newDetailEntry.appendChild(classNumberText);

class NewClassEntry {
    constructor(number, date, videoLink, videoThumbnail, materials, solutions, slides, motivation, checkin) {
        this.number = number;
        this.date = date;
        this.videoLink = videoLink;
        this.videoThumbnail = videoThumbnail;
        this.materials = materials;
        this.solutions = solutions;
        this.slides = slides;
        this.motivation = motivation;
        this.checkin = checkin;
    }

    changeClassNumber() {
        return classNumberText.textContent = this.number;
    }

    changeDate() {
        return classDateText.textContent = this.date;
    }

    changeVideoLink() {
        if (!this.videoLink) {
            classVideo.textContent = `No recorded video for this class`;
        }
        classVideoUrl.setAttribute('href', `${this.videoLink}`);
        classVideoInfo.setAttribute('title', `Class ${this.number} Video`);
        classVideoInfo.setAttribute('alt', `Class ${this.number} Video`);
        classVideoInfo.setAttribute('poster', `${this.videoThumbnail}`);
    }

    changeMaterialsLink() {
        if (!this.materials) {
            classMaterials.style.display = 'none';
        }
        return classMaterialsUrl.setAttribute('href', `${this.materials}`);
    }

    changeSolutionsLink() {
        if (!this.solutions) {
            classSolutions.style.display = 'none';
        }
        return classSolutionsUrl.setAttribute('href', `${this.solutions}`);
    }

    changeSlidesLink() {
        if (!this.slides) {
            classSlides.style.display = 'none';
        }
        classSlidesUrl.setAttribute('href', `${this.slides}`);
        return classNumberText.textContent = this.number;
    }

    changeMotivationLink() {
        if (!this.motivation) {
            classMotivation.style.display = 'none';
        }
        return classMotivationUrl.setAttribute('href', `${this.motivation}`);
    }

    changeCheckinLink() {
        if (!this.checkin) {
            classCheckin.style.display = 'none';
        }
        return classCheckinUrl.setAttribute('href', `${this.checkin}`)
    }

    runAllCreateEntryFunctions() {
        this.changeClassNumber();
        this.changeDate();
        this.changeVideoLink();
        this.changeMaterialsLink();
        this.changeSolutionsLink();
        this.changeSlidesLink();
        this.changeMotivationLink();
        this.changeCheckinLink();
        createNewEntryInDom();
    };
}

// class Homework extends NewClassEntry {
//     constructor(number, watch, homeworkDue, submissionLink) {
//         super(number);
//         this.watch = watch;
//         this.homeworkDue = homeworkDue;
//         this.submissionLink = submissionLink;
//     }
// }


/* =======================
##########################
CREATING EACH CLASS ENTRY
##########################
======================= */

// `https://www.poetryfoundation.org/poems/51642/invictus`

// Template for creating thumbnails:
// `http://img.youtube.com/vi/TEXT-HERE/hqdefault.jpg`
// Reformat this eventually

const class01 = new NewClassEntry(
    `01`,
    `Jan 11, 2022`,
    `https://www.youtube.com/watch?v=L--DQgd1JVM`,
    `http://img.youtube.com/vi/L--DQgd1JVM/hqdefault.jpg`,
    `https://cdn.discordapp.com/attachments/738891289071714388/930589829421473862/class01-materials.zip`,
    null,
    `https://slides.com/leonnoel/100devs2-html-the-basics`,
    `https://www.poetryfoundation.org/poems/51642/invictus`,
    `https://twitter.com/leonnoel/status/1481030723347746816`,
);

// createNewEntryInDom();
class01.runAllCreateEntryFunctions();

const class02 = new NewClassEntry(
    `02`,
    `Jan 13, 2022`,
    `https://www.youtube.com/watch?v=L--DQgd1JVM`,
    `http://img.youtube.com/vi/sRv19gkZ4E0/hqdefault.jpg`,
    null,
    null,
    `https://slides.com/leonnoel/100devs2-html-the-basics`,
    null,
    `https://twitter.com/leonnoel/status/1481030723347746816`,
);

class02.runAllCreateEntryFunctions();

const class03 = new NewClassEntry(
    `03`,
    `Aug 30`,
);

class03.runAllCreateEntryFunctions();

const class04 = new NewClassEntry(
    `04`,
    `Dec 1`,
    `https://www.youtube.com/watch?v=CG2UKDor9SY`,
    `http://img.youtube.com/vi/CG2UKDor9SY/hqdefault.jpg`,
    `https://cdn.discordapp.com/attachments/738891289071714388/933851316646719569/class04-materials.zip`,
    `https://cdn.discordapp.com/attachments/738891289071714388/933917040769638420/class04-solutions.zip`,
    `https://slides.com/leonnoel/100devs2-css-the-basics/`,
    `https://youtu.be/6vuetQSwFW8`,
    `https://twitter.com/leonnoel/status/1484292275064631297`,
)

class04.runAllCreateEntryFunctions();