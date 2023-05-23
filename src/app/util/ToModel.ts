// ToModel.ts ----------------------------------------------------------------

/**
 * Convert arbitrary objects or arrays to the corresponding Model instances.
 *
 * @packageDocumentation
 */

// Internal Modules ----------------------------------------------------------

import Library from "../models/Library";

export const LIBRARY = (value: any): Library => {
    return new Library(value);
}

export const LIBRARIES = (values: any[]): Library[] => {
    const results: Library[] = [];
    values.forEach(value => {
        results.push(LIBRARY(value));
    });
    return results;
}

