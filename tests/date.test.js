import Joi from "joi";

describe("Joi validation date", () =>{
  it('should can validate date', () =>{
    const birthDateSchema = Joi.date().required().max("now").min("01-01-1998");

    const result = birthDateSchema.validate("01-01-1980");
    console.info(result);
    console.info(result.value);
    console.info(result.error);

    const result2 = birthDateSchema.validate("10-01-2020");
    console.log(result2);
    console.log(result2.value);
    console.log(result2.error);
  });
});