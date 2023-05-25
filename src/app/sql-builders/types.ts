// types.ts ------------------------------------------------------------------

/**
 * Type definitions for the various components of SQL statements that are
 * being built.  Technically they are all strings, but different type names
 * help distinguish the purpose for each of them, and enforce type
 * correctness in builder calls.
 *
 * @packageDocumentation
 */

/**
 * A comma-delimited list of field names.
 */
export type Fields = string;

// TODO - GroupBys?

// TODO - Havings?

/**
 * A comma-delimited list of ORDER BY expressions.
 */
export type OrderBys = string;

/**
 * A completed select statement.
 */
export type Select = string;

/**
 * A comma-delimited list of table names.
 */
export type Tables = string;

/**
 * A WHERE expression, which will be surrounded
 * by parentheses when a SELECT statement is generated
 */
export type Where = string;
