import nodemailer from "nodemailer"


export default async function handler(req, res) {
  if(req.method === "POST"){
    try {
      const data = req.body
      const email = process.env.EMAIL
      const password = process.env.PASSWORD
      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
          user: email,
          pass: password
        }
      })
      const mailOptions = {
        from: data.email,
        to: email,
        subject: `Message from ${data.name}`,
        html: `
        <h3>Information</h3>
        <ul>
          <li>Name: ${data.name}</li>
          <li>Email: ${data.email}</li>
          </ul>
          <h3>Message</h3>
          <p>${data.message}</p>
          `
      }


      await transporter.sendMail(mailOptions)
      res.status(200).json({message: "Email sent successfully"})
      console.log(mailOptions)
      console.log("sucessfully");
    } catch (error) {
      res.status(500).json({message: "Something went wrong"})
      console.log(error);
    }
  } else {
    res.status(400).json({message: "Something went wrong"})

  }
}