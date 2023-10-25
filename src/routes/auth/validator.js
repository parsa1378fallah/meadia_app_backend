const expressValidator  = require('express-validator');
const check = expressValidator.check

module.exports = new class {
    registerValidator(){
        return [
            check('email').isEmail().withMessage('ایمیل نا معتبر است') , 
            check('firstName').not().isEmpty().withMessage('نام نمیتواند خالی باشد'),
            check('lastName').not().isEmpty().withMessage('نام خانوادگی نمی تواند خالی باشد'),
            check('userName').not().isEmpty().withMessage('نام کاربری نمیتواند خالی باشد'),
            check('password').not().isEmpty().withMessage('رمز عبور نمی تواند خالی باشد')
        ]
    }
    loginValidator(){
        return [
            check('email').isEmail().withMessage('ایمیل نامعتبر است') , 
            check('password').not().isEmpty().withMessage('رمز عبور نمی تواند خالی باشد')
        ]
    }
}