export class validationService{
    static getValidationMessage(validatorName: string, validatorValue?: any){
        let config = {
        'required': 'Required',
        'invalidMobileNumber': 'Please enter valid mobile number'
        };
    }
    static phoneNumberValidator(control){
        if(control.value.match(/^\d+$/)){

        }
        else{
            return { 'invalidMobileNumber': true }
        }

    }
    static employeeIdValidation(){}
}