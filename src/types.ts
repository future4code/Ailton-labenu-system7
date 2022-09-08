export type Teacher = {
  id?: string;
  name: string;
  email: string;
  birth_date: string | Date;
  class_id?: string;
};

export type updatePersonClass = {
  id: string;
  class_id: string;
};
