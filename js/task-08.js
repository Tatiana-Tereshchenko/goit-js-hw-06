const formEl = document.querySelector('.login-form');
console.log(formEl);


formEl.addEventListener('submit', OnFormSubmit)
function OnFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    
const formData = {}
    let allFiled = true;
    for (let i = 0; i < formElements.length; i += 1) {
        const element = formElements[i];
        if (element.tagName === 'INPUT') {
            if (element.value === '') {
                allFiled = false;
            }
            formData[element.name] = element.value;
        }
        
    }
        if (!allFiled) {
    alert('Please fill in all fields');
        }
        else {
console.log(formData);
    formEl.reset(); 
}
    }


