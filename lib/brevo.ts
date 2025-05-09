import brevo from "@getbrevo/brevo";

type FormData = {
  name: string,
  email: string,
  message: string
}

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY as string
);
console.log('brevo api key set', process.env.BREVO_API_KEY)

const smtpEmail = new brevo.SendSmtpEmail();

console.log('passed brevo')


export async function sendEmail(formData: FormData) {
  const { name, email, message } = formData;
  smtpEmail.subject = "Message from Web Portfolio Daniel Merchan";
  smtpEmail.to = [{ email: "danielmca60@gmail.com", name: "Daniel Merchan" }];
  smtpEmail.sender = { email: "danielmca60@gmail.com", name: 'WebPortfolio Message' };
  smtpEmail.htmlContent = `
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message from Web Portfolio</title>
            <style>
                body {
                    font-family: sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #333333;
                    text-align: center;
                    margin-bottom: 20px;
                }
                p {
                    color: #555555;
                    line-height: 1.6;
                    margin-bottom: 15px;
                }
                strong {
                    color: #333333;
                }
            </style>
        </head>
    <body>
        <div class="container">
            <h1>Message from Web Portfolio</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Sender:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        </div>
    </body>
    </html>
    `;

  try {
    await apiInstance.sendTransacEmail(smtpEmail);
    console.log("Email sent successfully");
    return true
    
  } catch (error) {
    console.log(error)
    return false
  }

}
