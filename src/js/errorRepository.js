export default class ErrorRepository {
  constructor(name, description) {
    this.errorsCode = new Map();
    this.name = name;
    this.description = description;

    this.errorsCode.set(this.name, this.description);
  }

  translate(code) {
    if (this.errorsCode.has(code)) {
      return this.errorsCode.get(code);
    }
    throw new Error('Unknown error');
  }
}
