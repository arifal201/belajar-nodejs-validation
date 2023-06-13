import Joi from "joi";

describe("Joi validation", () => {
  it('should can custom messages validation', () =>{
    const shcema = Joi.string().min(3).max(100).required().messages({
      'string.min' : '{{#label}} panjang karakter minimal {{#limit}} karakter',
      'string.max' : '{{#label}} panjang maksimal karakter {{#limit}} karakter'
    });

    const request = 'a';

    const result = shcema.validate(request, {
      abortEarly: false
    });

    console.info(result);
  });

  it('should can custom messages object validation', () =>{
    const shcema = Joi.object({
      username: Joi.string().email().required().messages({
        'any.required' : '{{#label}} harus diisi',
        'string.email' : '{{#label}} email tidak valid'
      }),
      password: Joi.string().min(6).max(10).required().messages({
        'string.min' : '{{#label}} panjang minimal adalah {{#limit}}',
        'string.max' : '{{#llabel}} panjang maksimal adalah {{#limit}}'
      })
    });

    const request = {

    };

    const result = shcema.validate(request, {
      abortEarly: false
    });

    console.info(result);
  });
});