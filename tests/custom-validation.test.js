import Joi from "joi";

describe("Joi Validation", () =>{
  it('should can create custom validation', () =>{
    const registerSchema = Joi.object({
      username: Joi.string().email().required().min(3).max(20),
      password: Joi.string().min(3).max(10).required().custom((value,helpers) => {
        if (value.startsWith('arifal')) {
          return helpers.error('password.wrong');
        }
        return value;
      }).messages({
        'password.wrong' : 'password can not start with "arifal"'
      }),
      confirmPassword: Joi.string().min(3).max(10).required()
    }).custom((value,helpers) => {
      if (value.password !== value.confirmPassword) {
        return helpers.error('register.password.different');
      }
      return value;
    }).messages({
      'register.password.different' : 'password and confirmPassword is different'
    });

    const request = {
      username: 'arifal@gmail.com',
      password: 'salah12345',
      confirmPassword: 'salah12347'
    };

    const result = registerSchema.validate(request, {
      abortEarly: false
    });

    console.info(result);
  });
});