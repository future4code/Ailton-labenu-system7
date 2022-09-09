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

export type Class = {
    id: string,
    name: string,
    module: number,
    students: any[],
    teachers: any[]
};