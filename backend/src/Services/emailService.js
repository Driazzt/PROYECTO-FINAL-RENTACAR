const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "drivezyrentacar@gmail.com",
    pass: "giut atdw vfaz ozmp",
  },
});

const sendMail = async (to, subject, html) => {
  try {
    const options = {
      from: "drivezyrentacar@gmail.com",
      to: to,
      subject: subject,
      html: html,
    };
    await transporter.sendMail(options);
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendMail;
