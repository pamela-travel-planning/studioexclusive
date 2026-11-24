import { z } from "zod";

const schema = z.object({
  form: z.enum(["kontakt", "kariera"]),
  name: z.string().trim().min(1).max(250),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().max(1000).optional().default(""),
});

// Sends the message to Netlify Forms. The matching static form definitions live in
// public/__forms.html so Netlify detects both forms ("kontakt", "kariera") at deploy time.
// Email notifications to studio.exclusive@gmail.com are set up in Netlify > Forms > Notifications.
export async function submitContact({ data }: { data: unknown }) {
  const parsed = schema.parse(data);
  const body = new URLSearchParams({
    "form-name": parsed.form,
    name: parsed.name,
    email: parsed.email,
    phone: parsed.phone,
    message: parsed.message,
  });
  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  if (!res.ok) throw new Error("Správu sa nepodarilo odoslať.");
  return { ok: true };
}
