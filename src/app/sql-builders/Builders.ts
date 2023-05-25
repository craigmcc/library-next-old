// Builders.ts ---------------------------------------------------------------

/**
 * Builder Pattern classes for constructing syntactically valid SQL
 * statements from constituent parts.
 *
 * @packageDocumentation
 */

import {
    Fields,
    OrderBys,
    Select,
    Tables,
} from "./types";
import {
    checkArray,
    checkDuplicate,
} from "./Errors";
import {Where} from "sequelize/types/utils";

/**
 * Builder for a comma-delimited list of field names.
 * Field names can be plain, prefixed by a table abbreviation and ".",
 * and/or have " AS {alias}" appended.
 */
export class FieldsBuilder {

    constructor() {
        this.target = [];
    }

    private target: string[];

    public field(field: string): FieldsBuilder {
        checkArray("Fields", this.target, field);
        this.target.push(field);
        return this;
    }

    public fields(fields: string[]): FieldsBuilder {
        for (const field in fields) {
            this.field(field);
        }
        return this;
    }

    public build(): Fields {
        return this.target.join(", ");
    }

}

/**
 * Builder for a comma-delimited list of ORDER BY expressions.
 * Each expression can be a field name, or a field name plus
 * " ASC" or " DESC" to specify sort direction on that field.
 */
export class OrderBysBuilder {

    constructor() {
        this.target = [];
    }

    private target: string[];

    public orderBy(orderBy: string): OrderBysBuilder {
        checkArray("OrderBys", this.target, orderBy);
        this.target.push(orderBy);
        return this;
    }

    public orderBys(orderBys: string[]): OrderBysBuilder {
        for (const orderBy in orderBys) {
            this.orderBy(orderBy);
        }
        return this;
    }

    public build(): Fields {
        return this.target.join(", ");
    }

}

/**
 * Builder for a complete SELECT statement, assembled from the parts
 * passed to our methods.
 */
export class SelectBuilder {

    constructor() {
        this.ourFields = null;
        this.ourLimit = null;
        this.ourOffset = null;
        this.ourOrderBys = null;
        this.ourTables = null;
        this.ourWheres = null;
    }

    private ourFields: Fields | null;
    private ourLimit: number | null;
    private ourOffset: number | null;
    private ourOrderBys: OrderBys | null;
    private ourTables: Tables | null;
    private ourWheres: Where[] | null;

    // TODO - distinct?

    // NOTE - if omitted, "*" will be the default fields list
    public fields(fields: Fields): SelectBuilder {
        checkDuplicate("Select", "fields", this.ourFields);
        this.ourFields = fields;
        return this;
    }

    public limit(limit: number): SelectBuilder {
        checkDuplicate("Select", "limit", this.ourLimit);
        this.ourLimit = limit;
        return this;
    }

    public offset(offset: number): SelectBuilder {
        checkDuplicate("Select", "offset", this.ourOffset);
        this.ourOffset = offset;
        return this;
    }

    public orderBys(orderBys: OrderBys): SelectBuilder {
        checkDuplicate("Select", "orderBys", this.ourOrderBys);
        this.ourOrderBys = orderBys;
        return this;
    }

    public tables(tables: Tables): SelectBuilder {
        checkDuplicate("Select", "tables", this.ourTables);
        this.ourTables = tables;
        return this;
    }

    public where(where: Where): SelectBuilder {
        if (!this.ourWheres) {
            this.ourWheres = [];
        } else {
            checkArray("Select", this.ourWheres, where);
        }
        this.ourWheres.push(where);
        return this;
    }

    // TODO - support sub-expressions
    // TODO - support "or" as well as "and" in WHERE clause
    // TODO - "group by"?
    // TODO - "having"?
    public build(): Select {
        let select: Select = "SELECT";
        if (this.ourFields) {
            select += " " + this.ourFields;
        } else {
            select += " *";
        }
        if (this.ourTables) {
            select += " FROM " + this.ourTables;
        }
        if (this.ourWheres) {
            select += " WHERE ";
            let first = true;
            for (const where in this.ourWheres) {
                if (first) {
                    first = false;
                } else {
                    select += " AND ";
                }
                select += `(${where})`;
            }
        }
        if (this.ourOrderBys) {
            select += " ORDER BY " + this.ourOrderBys;
        }
        if (this.ourLimit) {
            select += ` LIMIT ${this.ourLimit}`;
        }
        if (this.ourOffset) {
            select += ` OFFSET ${this.ourOffset}`;
        }
        return select;
    }

}

/**
 * Builder for a comma-delimited list of field names.  Each
 * table name can be a simple name or "{name} AS {alias}".
 * TODO: support a way to construct joins.
 */
export class TablesBuilder {

    constructor() {
        this.target = [];
    }

    private target: string[];

    public table(table: string): TablesBuilder {
        checkArray("Tables", this.target, table);
        this.target.push(table);
        return this;
    }

    public tables(tables: string[]): TablesBuilder {
        for (const table in tables) {
            this.table(table);
        }
        return this;
    }

    public build(): Tables {
        return this.target.join(",");
    }

}

