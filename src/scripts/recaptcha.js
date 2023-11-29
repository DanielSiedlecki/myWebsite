import { RecaptchaValidService } from "@/services/mailer";

async function validationCaptcha(token) {
  try {
    var data = {
      "g-recaptcha-response": token,
    };

    const RecaptchaValidation = new RecaptchaValidService();
    const response = await RecaptchaValidation.create(data);

    console.log(response);
    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}

export { validationCaptcha };
