import { http } from "./http-common";

class SendMailService {
  create(data) {
    return http.post("/project/sendmail", data);
  }
}

class RecaptchaValidService {
  create(data) {
    return http.post("/project/recaptcha", data);
  }
}

export { SendMailService, RecaptchaValidService };
