import validatejs from 'validate.js';

export default class Validation {
	constructor(validation) {
		this.validation = validation;
	}

	validate(value) {
		const result = validatejs({ value }, { value: this.validation });

		if (result) {
			return result.value[0];
		}

		return null;
	}
}