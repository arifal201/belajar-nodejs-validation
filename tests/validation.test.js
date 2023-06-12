import Joi from "joi";

describe("Joi validation", () => {
  it('should can create schema validation', () => {
    const schema = Joi.string().min(6).max(255).required();

    const result = schema.validate("arifal");

    if (result.error) {
      console.info(result.error);
    }else{
      console.info(result);
    }
  });

  it('should can validate data type', () =>{
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().min(1000).max(1000000).required();

    const resultUsername = usernameSchema.validate("arifal@gmail.com");
    console.log(resultUsername);
    const resultIsAdmin = isAdminSchema.validate("true");
    console.log(resultIsAdmin);
    const resultPrice = priceSchema.validate("1000");
    console.log(resultPrice);
  });
});