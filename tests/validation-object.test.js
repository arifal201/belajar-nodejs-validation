import Joi from "joi";

describe("Joi validation", () =>{
  it('should can validation object', () =>{
    const loginSchema = Joi.object({
      username: Joi.string().required().email().min(8),
      password: Joi.string().min(6).max(100).required()
    });

    const request = {
      username: 'Arifal',
      password: 'Rahasia'
    };

    const result = loginSchema.validate(request, {
      abortEarly: false
    });

    console.info(result);
  });

  it('should can validate nested object', () =>{
    const createUserSchema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().max(255).required(),
      address: Joi.object({
        street: Joi.string().max(200).required(),
        city: Joi.string().max(100).required(),
        country: Joi.string().max(100).required(),
        zipCode: Joi.string().max(100).required()
      }).required()
    });

    const request = {
      address: {

      }
    };

    const result = createUserSchema.validate(request, {
      abortEarly: false
    });

    // console.info(result);

    if (result.error) {
      result.error.details.forEach(detail => {
        console.info(`${detail.path} : ${detail.message}`);
      })
    }
  });
});