const dateInp = document.querySelector("input").addEventListener("change", calcAge)

//get the birthdata entered by user
function getAge() {
    const birthDate = document.querySelector("input");
    return new Date(birthDate.value);
}

function calcAge() {
    //get the dob of the user
    const dob = getAge();
    //extract the year, month, and date from user date input  
    let dobYear = dob.getYear();
    let dobMonth = dob.getMonth();
    let dobDate = dob.getDate();

    //get the current date from the system  
    let now = new Date();
    //extract the year, month, and date from current date  
    let currentYear = now.getYear();
    let currentMonth = now.getMonth();
    let currentDate = now.getDate();

    //declare a letiable to collect the age in year, month, and days  
    let age = {};

    //get years  
    yearAge = currentYear - dobYear;

    let monthAge = 0;
    let dateAge = 0;

    //get months  
    if (currentMonth >= dobMonth)
        //get months when current month is greater  
        monthAge = currentMonth - dobMonth;
    else {
        yearAge--;
        monthAge = 12 + currentMonth - dobMonth;
    }

    //get days  
    if (currentDate >= dobDate)
        //get days when the current date is greater  
        dateAge = currentDate - dobDate;
    else {
        monthAge--;
        dateAge = 31 + currentDate - dobDate;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    //group the age in a single letiable  
    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    displayAge(age)
}

function displayAge(age) {
    const years = document.querySelector("#years")
    const months = document.querySelector("#months")
    const days = document.querySelector("#days")

    years.innerHTML = age.years;
    months.innerHTML = age.months;
    days.innerHTML = age.days;
}