import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const CreateEventSchema = z.object({
	name: z.string(),
	date: z.coerce.date(),
	shifts: z
		.object({
			startAt: z.coerce.date(),
			endAt: z.coerce.date(),
			users: z.array(z.string())
		})
		.array()
});

export const ContactUsSchema = zfd.formData({
	namekjkj: zfd.text(z.string().min(2).max(50)),
	emailkjkj: zfd.text(z.string().email().min(3)),
	messagekjkj: zfd.text(z.string().min(5).max(1000))
});

export const CreateInvitationSchema = z.object({
	email: z.string().email()
});
