import Joi from "joi";

describe("Joi validation", () =>{
  it('should can validation array', () =>{
    const favoriteSchema = Joi.array().items(
      Joi.string().min(3).required().max(100)
    ).min(1).unique();

    const favorite = ['A', 'gamming', 'coding', 'coding'];
    const result = favoriteSchema.validate(favorite, {
      abortEarly: false
    });

    console.info(result);
  });

  it('should can validation array of object', () =>{
    const addressSchema = Joi.array().items(
      Joi.object({
        street: Joi.string().max(200).required(),
        city: Joi.string().max(100).required(),
        country: Joi.string().max(100).required(),
        zipCode: Joi.string().max(100).required()
      })
    ).min(1);

    const address = [
      {
        street: 'jalan jalan'
      }
    ];

    const result = addressSchema.validate(address, {
      abortEarly: false
    });

    console.info(result);
  });
});