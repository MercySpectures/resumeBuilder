//To add another education detail
var addEducation = document.getElementById("addEducation");
var education = document.querySelector(".education");

//making array and saving data
var educationCounter = 0;
var educationArray = [
    degreeArray = [],
    uniArray = [],
    gradYearArray = []
];

addEducation.addEventListener("click", () => {

    var degree = document.getElementsByName("degree")[0].value;
    var uni = document.getElementsByName("uni")[0].value;
    var gradYear = document.getElementsByName("year")[0].value;

    educationArray[0].push(degree);
    console.log(degree);
    educationArray[1].push(uni);
    console.log(uni);
    educationArray[2].push(gradYear);
    console.log(gradYear);

    document.getElementsByName("degree")[0].value = "";
    document.getElementsByName("uni")[0].value = "";
    document.getElementsByName("year")[0].value = "";

    educationCounter++;
})

//To add another experience detail
var addExperience = document.getElementById("addExperience");
var experience = document.querySelector(".experience");

//making array and saving data
var experienceCounter = 0;
var experienceArray = [
    jobTitleArray = [],
    companyArray = [],
    startDateArray = [],
    endDateArray = [],
    responsibilitiesArray = []
];

addExperience.addEventListener("click", () => {


    console.log("experience add button clicked");

    var jobTitle = document.getElementsByName("jobTitle")[0].value;
    var company = document.getElementsByName("company")[0].value;
    var startDate = document.getElementsByName("duration")[0].value;
    var endDate = document.getElementsByName("duration")[0].value;
    var responsibilities = document.getElementById("responsibilities").value;

    experienceArray[0].push(jobTitle);
    console.log(jobTitle);
    experienceArray[1].push(company);
    console.log(company);
    experienceArray[2].push(startDate);
    console.log(startDate);
    experienceArray[3].push(endDate);
    console.log(endDate);
    experienceArray[4].push(responsibilities);
    console.log(responsibilities);

    document.getElementsByName("jobTitle")[0].value = "";
    document.getElementsByName("company")[0].value = "";
    document.getElementsByName("duration")[0].value = "";
    document.getElementsByName("duration")[1].value = "";
    document.getElementById("responsibilities").value = "";

    experienceCounter++;
})

//To add skills
var addSkills = document.getElementById("addSkills");
var skillArray = [];
var skillCounter = 0;
addSkills.addEventListener("click", () => {
    var skills = document.getElementsByName("skills")[0].value;
    skillArray[skillCounter] = skills;
    skillCounter++;
    document.getElementsByName("skills")[0].value = "";
})



var submit = document.getElementById("submit").onclick = function (){
    document.getElementById("resumeWrapper").style.display = "block";
    document.getElementById("formWrapper").style.display = "none";

    document.getElementById("userName").innerHTML = document.getElementsByName("fname")[0].value;
    document.getElementById("userNumber").innerHTML = document.getElementsByName("number")[0].value;
    document.getElementById("userEmail").innerHTML = document.getElementsByName("email")[0].value;
    document.getElementById("userCity").innerHTML = document.getElementsByName("city")[0].value;
    document.getElementById("userState").innerHTML = document.getElementById("states").options[document.getElementById("states").options.selectedIndex].innerHTML;
    document.querySelector(".userObjective p").innerHTML = document.getElementById("objective").value;

    setEducationValue();
    setExperienceValue();
    setSkillsValue();
    setReferenceValue();

}


function setReferenceValue(){
    document.getElementById("userReference").innerHTML = document.getElementById("reference").value;
}

function setSkillsValue(){
    for(var i = 0; i < skillCounter; i++){
        var userSkillsResume = document.getElementById("userSkills");
        userSkillsResume.innerHTML += "<span id=" + "skills" + ">" + skillArray[i].toUpperCase() + "</span>";
    }
}

function setEducationValue(){
    var educationBox = document.querySelector(".educationBox");
    if(educationCounter > 0){
        for(var i = 0; i < educationCounter; i++){
            educationBox.innerHTML += `<div class="educationBoxWrapper">
                                        <div class="top">
                                            <h3 id="userDegree">${educationArray[0][i]}</h3>
                                            <span id="userGradYear">${educationArray[1][i]}</span>
                                        </div>
                                        <span id="userUni">${educationArray[2][i]}</span>
                                    </div>`;
        }
    }else{
        educationBox.innerHTML += `<div class="educationBoxWrapper">
                                        <div class="top">
                                            <h3 id="userDegree">${educationArray[0][educationCounter]}</h3>
                                            <span id="userGradYear">${educationArray[1][educationCounter]}</span>
                                        </div>
                                        <span id="userUni">${educationArray[2][educationCounter]}</span>
                                    </div>`;
    }
}

function setExperienceValue(){
    var userExperienceBox = document.querySelector(".userExperience .experienceBox");
    if(experienceCounter > 0){
        for(var i = 0; i < experienceCounter; i++){
            userExperienceBox.innerHTML += `<div class="experienceBoxes">
                                            <div class="top">
                                                <h3 id="userJobTitle">${experienceArray[0][i]}</h3>
                                                <div class="jobTimePeriod">
                                                    <span id="userJobStartDate">${experienceArray[2][i]}</span>
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVR4nNXWPQrCQBCG4fcEsQkJ6oY0ksaT5ZaxE2wVf9HKFF7CIKwgsulmPnRg6geGb2cWfqQmwArYAZUXkgFr4Bn74oW1H8i7z0CwhvI4shQ2t8aKEezkgZXAfgSbWWMhhuEbO3pgr8RdVVgN3BLYAZhaYwvgrsIaoFdhS+CRwDZ/CTWK0UnCUCviXSkebFCsoFKxVAvFmchVh69VnfJM9Tkhfrc6YOuJmNYA6EaADfD8J8gAAAAASUVORK5CYII=">
                                                    <span id="userJobEndDate">${experienceArray[3][i]}</span>
                                                </div>
                                            </div>
                                            <h3 id="userCompanyName">${experienceArray[1][i]}</h3>
                                            <span id="userResponsibilities">${experienceArray[4][i]}</span>
                                        </div>`;
        }
    }else{
        userExperienceBox.innerHTML += `<div class="experienceBoxes">
                                            <div class="top">
                                                <h3 id="userJobTitle">${experienceArray[0][i]}</h3>
                                                <div class="jobTimePeriod">
                                                    <span id="userJobStartDate">${experienceArray[2][i]}</span>
                                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVR4nNXWPQrCQBCG4fcEsQkJ6oY0ksaT5ZaxE2wVf9HKFF7CIKwgsulmPnRg6geGb2cWfqQmwArYAZUXkgFr4Bn74oW1H8i7z0CwhvI4shQ2t8aKEezkgZXAfgSbWWMhhuEbO3pgr8RdVVgN3BLYAZhaYwvgrsIaoFdhS+CRwDZ/CTWK0UnCUCviXSkebFCsoFKxVAvFmchVh69VnfJM9Tkhfrc6YOuJmNYA6EaADfD8J8gAAAAASUVORK5CYII=">
                                                    <span id="userJobEndDate">${experienceArray[3][i]}</span>
                                                </div>
                                            </div>
                                            <h3 id="userCompanyName">${experienceArray[1][i]}</h3>
                                            <span id="userResponsibilities">${experienceArray[4][i]}</span>
                                        </div>`;
    }
}