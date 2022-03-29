class Person {

  surname: string;
  name: string;
  birthPlace: string;
  birthDate: string;
  gender: string;

  constructor(surname: string, name: string, birthPlace: string, birthDate: string, gender: string) {
    this.surname = surname;
    this.name = name;
    this.birthPlace = birthPlace;
    this.birthDate = birthDate;
    this.gender = gender;
  }
}

export { Person };