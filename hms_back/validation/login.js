const isEmail= require('validator').isEmail;
const isEmpty= require('validator').isEmpty;
const isLength=require('validator').isLength;

module.exports = function validateLoginInput(data){

    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    //Email checks
    if(isEmpty(data.email)){
        errors.email = "Email field is required";
    } else if(!isEmail(data.email)){
        errors.email = "Email is invalid";
    }

    //Password checks
    if(isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    return{
        errors,
        isValid: isEmpty(errors)
    };
};
