import "./style.css";

class Validator {
    constructor() {
        this.inputs = {};
        this.errors = {};
    };

    getInputs() {
        const obj = this;
        const inputs = document.querySelectorAll('input');

        for (let i = 0; i < inputs.length; i++) {
            obj.inputs[inputs[i].name] = inputs[i];
        };

        delete obj.inputs['submit'];
    };

    getErrors() {
        const obj = this;
        const errors = document.querySelectorAll('span.error');

        for (let i = 0; i < errors.length; i++) {
            obj.errors[errors[i].id] = errors[i];
        };
    };

    validateOnSubmit() {
        const obj = this;
        
        const submitButton = document.querySelector('.submit');
        
        for (const key in obj.inputs) {
            const input = obj.inputs[key];
        };

        submitButton.addEventListener('click', function (event) {
            const pass = obj.inputs['pass'];
            const repPass = obj.inputs['rep-pass'];
            
            if(pass.value !== repPass.value) {
                event.preventDefault();

                obj.errors['rep-pass'].innerText = 'Passwords do not match!'
                console.log('passwords dont match');
            };

            for (const key in obj.inputs) {
                const input = obj.inputs[key];

                if(!input.validity.valid) {
                    event.preventDefault();

                    const error = obj.errors[input.name];

                    obj.switchStatement(input.name);
                };
            };
        });
    };

    validateOnInput() {
        const obj = this;

        for (const key in obj.inputs) {
            const input = obj.inputs[key];

            const validation = function(e) {
                const error = obj.errors[input.name];

                if(!e.target.validity.valid) {
                    obj.switchStatement(input.name);
                } else {
                    error.innerText = '';
                };
            };
            
            input.addEventListener('input', validation);
            input.addEventListener('focusout', validation);
        };
    };

    switchStatement(input) {
        const obj = this;
        const error = obj.errors[input];

            switch (error.id) {
                case 'name':
                    error.innerText = 'Please input a name.';
                    break;
                case 'surname':
                    error.innerText = 'Please input a surname.';
                    break;
                case 'country':
                    error.innerText = 'Please input a country name.';
                    break;
                case 'zip':
                    error.innerText = 'Please input a valid 5 digit ZIP Code.';
                    break;
                case 'email':
                    error.innerText = 'Please input a valid e-mail address.';
                    break;
                case 'pass':
                    error.innerText = 'Password must have at least 8 characters.';
                    break;
                case 'pass':
                    error.innerText = 'Password must have at least 8 characters.';
                    break;
                case 'rep-pass':
                    error.innerText = 'Password must have at least 8 characters.';
                    break;
            };
    };
};

const formControl = new Validator;
formControl.getInputs();
formControl.getErrors();
formControl.validateOnSubmit();
formControl.validateOnInput();