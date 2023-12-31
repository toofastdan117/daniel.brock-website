// For displaying the current year in the footer
let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();
let currentDate = `${month}-${day}-${year}`;

const footerElement = document.querySelector('.js-footer')
footerElement.innerHTML = `&#169;${currentDate} Daniel Brock. All rights reserved.`