function toggleContactForm() {
    var formContainer = document.getElementById('contactFormContainer');
    formContainer.style.display = (formContainer.style.display === 'none' || formContainer.style.display === '') ? 'block' : 'none';
}
let skillName = document.getElementsByClassName('skill-name');
console.log(skillName);
let htmlTxtElements = document.querySelectorAll('.html-txt');
let skillNameElements = document.querySelectorAll('.skill-name');

htmlTxtElements.forEach(function (htmlTxtElement, index) {
    let skillNameElement = skillNameElements[index];

htmlTxtElement.addEventListener('mouseover', function () {
        // Change the color when hovering
        skillNameElement.style.color = '#840dbf'; 
        skillNameElement.style.backgroundColor = 'white'; 
    });
    
    htmlTxtElement.addEventListener('mouseout', function () {
        // Reset the color when not hovering
        skillNameElement.style.color = 'white'; 
        skillNameElement.style.backgroundColor = '#840dbf'; 
    });
});
