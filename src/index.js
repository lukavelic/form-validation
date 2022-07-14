import "./style.css";

class Validator {
    getErrorSpans() {
        const errors = document.querySelectorAll('span.error');
        console.log(errors)
        for(let i = 0; i < errors.length; i++) {
            this[errors[i].id] = errors[i];
        };
    }

    validate() {
        const element = this;
        const submit = document.querySelector('.submit')
        console.log(validator);
        console.log(this);
        // const id = this.name;
        // const value = this.value;

        const validateOnInput = function(element) {

            if(element.getAttribute('class') === 'submit') {
                for (const property in inputsObject) {
                    inputsObject[property].validator.validate();
                    console.log('test');
                };
            } else if(!element.validity.valid) {
                console.log('invalid');
                const span = validator[element.name];
                span.innerText = 'Please fix';
                return false;
            } else {
                const span = validator[element.name];
                span.innerText = '';
                console.log('valid');

            };
        };
        
        validateOnInput(element);
    }
};

const validator = new Validator;
validator.getErrorSpans();

class Inputs {

    getInputs() {
        const obj = this;
        const inputs = document.querySelectorAll('input');
        
        for(let i = 0; i < inputs.length; i++) {
            this[inputs[i].name] = inputs[i];
        };

        for (const property in obj) {

            obj[property].addEventListener('input', validator.validate);

        };
    };

    
};

const inputsObject = new Inputs;
inputsObject.getInputs();

console.log(inputsObject)