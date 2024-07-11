exports.SuccessEmail = (referName, referEmail, referWorkId, refereeName, refereeEmail, description) => {
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Referral Information</title>
          <style>
              @media screen and (max-width: 600px) {
                  .content {
                      width: 100% !important;
                      display: block !important;
                      padding: 10px !important;
                  }
                  .header, .body, .footer {
                      padding: 20px !important;
                  }
              }
              body {
                  font-family: 'Poppins', Arial, sans-serif;
                  background-color: #ffffff;
                  margin: 0;
                  padding: 0;
                  color: #333333;
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
              }
              .header {
                  background-color: #345C72;
                  padding: 40px;
                  text-align: center;
                  color: white;
                  font-size: 24px;
              }
              .body {
                  padding: 40px;
                  text-align: left;
                  font-size: 16px;
                  line-height: 1.6;
              }
              .cta {
                  display: inline-block;
                  padding: 10px 20px;
                  background-color: #FFD60A;
                  color: #000000;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 16px;
                  font-weight: bold;
                  margin-top: 20px;
              }
              .footer {
                  background-color: #333333;
                  padding: 40px;
                  text-align: center;
                  color: white;
                  font-size: 14px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                      <td align="center" style="padding: 20px;">
                          <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                              <!-- Header -->
                              <tr>
                                  <td class="header">
                                      Accredian Referral Information
                                  </td>
                              </tr>
                              <!-- Body -->
                              <tr>
                                  <td class="body">
                                      <p>Dear ${referName},</p>
                                      <p>We are excited to inform you that you have been referred by ${refereeName} for an opportunity at Accredian. Your profile stands out remarkably and has caught our attention.</p>
                                      <p><strong>Referral Details:</strong></p>
                                      <p><strong>Referer's Name:</strong> ${referName}</p>
                                      <p><strong>Referer's Email:</strong> ${referEmail}</p>
                                      <p><strong>Referer's Work ID:</strong> ${referWorkId}</p>
                                      <p><strong>Your Email:</strong> ${refereeEmail}</p>
                                      <p><strong>Description:</strong> ${description}</p>
                                      <p>We are thrilled about the possibility of you joining our team and we will be in touch shortly with more details.</p>
                                      <p>If you have any further questions or need immediate assistance, please feel free to reach out to us at <a href="mailto:info@accredian.com">info@accredian.com</a>. We are here to help!</p>
                                      <p>Best Regards,<br>The Accredian Team</p>
                                  </td>
                              </tr>
                              <!-- Call to action Button -->
                              <tr>
                                  <td style="padding: 0px 40px 40px 40px; text-align: center;">
                                      <table cellspacing="0" cellpadding="0" style="margin: auto;">
                                          <tr>
                                              <td align="center" style="background-color: #345C72; padding: 10px 20px; border-radius: 5px;">
                                                  <a href="https://accredian.com/refer" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">Refer Another Candidate</a>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                              <!-- Footer -->
                              <tr>
                                  <td class="footer">
                                      Copyright &copy; 2024 | Accredian
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </div>
      </body>
      </html>`;
  };
  