import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const personSchema = z.object({
  id: z.number(),
  name: z.string().min(5),
  age: z.number().min(5),
});

export type Person = z.infer<typeof personSchema>;
export type PersonCreationParams = Pick<Person, 'age' | 'name'>;

const validatePersonData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const personData = personSchema.safeParse(req.body);

    if (!personData.success) {
      const formatted = personData.error.format();
      res.status(400).json({ formatted });
    }

    res.locals.validatedData = personData;

    next();
  } catch (error: any) {
    res.status(400).json({ error });
  }
};

export { validatePersonData };
