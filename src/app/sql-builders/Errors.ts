// Errors.ts -----------------------------------------------------------------

/**
 * Error objects thrown by the various builders, plus helpers.
 *
 * @packageDocumentation
 */

// Error Classes -------------------------------------------------------------

export class DuplicateError extends Error {
    constructor(message: string) {
        super(message);
    }
}

// Error Helpers -------------------------------------------------------------

/**
 * Throws DuplicateError if the specified Array already containts the specified value.
 *
 * @param name Name of the object being built
 * @param array Array being checked
 * @param value Value to be checked against existing array values
 */
export function checkArray(name: string, array: any[], value: any): void {
    array.forEach(item => {
        if (item === value) {
            throw new DuplicateError(`${name} already has value ${value}`);
        }
    });
}

/**
 * Throws DuplicateError if the specified field has already been configured.
 *
 * @param name Name of the object being built
 * @param field Name of the field being checked
 * @param value Value of the field being checked
 */
export function checkDuplicate(name: string, field: string, value: any | null) {
    if (value !== null) {
        throw new DuplicateError(`${name} already has ${field} defined`);
    }
}

