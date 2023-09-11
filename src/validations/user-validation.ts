import { ZodError, inferFormattedError, typeToFlattenedError, z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const personSchema = z.object({
  name: z.string().min(5),
  age: z.number().min(5),
});

type PersonData = z.infer<typeof personSchema>;

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

export { PersonData, validatePersonData };
