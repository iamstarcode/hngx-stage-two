export interface Person {
  user_id: number;
  age: number;
  name: string;
}

export type PersonCreationParams = Pick<Person, 'age' | 'name'>;
