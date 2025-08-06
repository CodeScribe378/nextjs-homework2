import Joi from "joi";


export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).messages({
        'string.patter.base': 'it is not suitable to patter'
    }),
    price: Joi.number().max( 1000000).min(0).messages({
        'number.max': 'max price should be 1000000',
        'number.min': 'min price should be 0'
    }),
    year: Joi.number().min(1990).max(2024).messages({
        'number.min': 'min year should be 1990',
        'number.max': 'max year should be 2024'
    })
})