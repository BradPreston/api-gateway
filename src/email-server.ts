import app from "./services/email/index.js";
import emailServiceConfig from "./config/email-config.js";

app.listen(emailServiceConfig.port, () => {
    console.log(`Server running on port ${emailServiceConfig.port}`);
});