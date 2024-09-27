export interface Animal {
  name: string;
  age: number | null;  
  dangerous: boolean;
  corralId: number | null;
  incompatibleAnimalIds: number[];
}
