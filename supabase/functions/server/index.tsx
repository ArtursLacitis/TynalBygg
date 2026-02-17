import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
    "/*",
    cors({
        origin: "*",
        allowHeaders: ["Content-Type", "Authorization"],
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        exposeHeaders: ["Content-Length"],
        maxAge: 600,
    }),
);

// Health check endpoint
app.get("/make-server-a04047fa/health", (c) => {
    return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-a04047fa/contact", async (c) => {
    try {
        const { name, email, phone, message } = await c.req.json();

        // Validate required fields
        if (!name || !email || !message) {
            return c.json({ error: "Missing required fields" }, 400);
        }

        // Get Resend API key from environment
        const resendApiKey = Deno.env.get("RESEND_API_KEY");
        if (!resendApiKey) {
            console.error("RESEND_API_KEY not configured");
            return c.json({ error: "Email service not configured" }, 500);
        }

        // Send email using Resend API
        const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify({
                from: "TINAL BYGG Contact Form <onboarding@resend.dev>",
                to: ["tinalbygg@outlook.com"],
                subject: `New Contact Form Submission from ${name}`,
                html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
            }),
        });

        if (!emailResponse.ok) {
            const errorData = await emailResponse.text();
            console.error("Resend API error:", errorData);
            return c.json({ error: "Failed to send email" }, 500);
        }

        const result = await emailResponse.json();
        console.log("Email sent successfully:", result);

        return c.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error processing contact form:", error);
        return c.json({ error: "Internal server error" }, 500);
    }
});

Deno.serve(app.fetch);