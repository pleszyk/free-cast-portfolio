import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['pleszyk@gmail.com'],
      subject,
      react: EmailTemplate({ message, email }),
      text: message
    });

    if (error) {
      console.log(error)
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error)
    return Response.json({ error }, { status: 500 });
  }
}