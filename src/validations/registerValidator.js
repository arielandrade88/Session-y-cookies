const {check, body} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es obligatorio'),

    check('email')
    .isEmail().withMessage('Debes ingresar un email válido'),

    check('bgColor')
    .notEmpty().withMessage('Debes seleccionar un color'),
    
    check('age')
    .notEmpty().withMessage('Debes ingresar su edad')
    .isNumeric().withMessage('Debe ingresar un numero')
]