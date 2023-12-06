class Contact {
  fullName: string;
  email: string;
  telephone: string;
  id: number;

  constructor(fullName: string, email: string, telephone: string, id: number) {
    this.fullName = fullName;
    this.email = email;
    this.telephone = telephone;
    this.id = id;
  }
}

export default Contact;
