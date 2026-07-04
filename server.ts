import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    console.log(`[Contact Form Received] Name: ${name}, Email: ${email}`);

    try {
      const smtpUser = process.env.SMTP_USER || "leeshc0@naver.com";
      const smtpPass = process.env.SMTP_PASS || "3P8B73TZMX6L";

      // Set up Nodemailer transporter using Naver SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.naver.com',
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: true,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // Prepare email data
      // Note: Naver SMTP requires the 'from' address to match the authenticated user.
      const mailOptions = {
        from: `"${name}" <${smtpUser}>`,
        replyTo: email,
        to: "leeshc0@naver.com",
        subject: `[Website Inquiry] ${subject || 'New Message'}`,
        text: `You have received a new message from the contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p>You have received a new message from the contact form.</p>
               <p><strong>Name:</strong> ${name}<br/>
               <strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      };

      if (smtpUser && smtpPass) {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Your message has been sent successfully. We will get back to you soon." });
      } else {
        console.warn("SMTP credentials missing.");
        res.status(500).json({ success: false, message: "Server configuration error." });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send message due to server error." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
