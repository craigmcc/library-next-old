// server/services/LibraryServices.ts ----------------------------------------

/**
 * Services implementation for Library models.
 *
 * @packageDocumentation
 */

// External Modules ----------------------------------------------------------

import {FindOptions, Op} from "sequelize";
import "server-only";

// Internal Modules ----------------------------------------------------------

import BaseParentServices from "./BaseParentServices";
//import AuthorServices from "./AuthorServices";
//import SeriesServices from "./SeriesServices";
//import StoryServices from "./StoryServices";
//import UserServices from "./UserServices";
//import VolumeServices from "./VolumeServices";
//import Author from "../models/Author";
import Library from "../models/Library";
//import Series from "../models/Series";
//import Story from "../models/Story";
//import User from "../models/User";
//import Volume from "../models/Volume";
import {NotFound} from "../../util/HttpErrors";
import {appendPaginationOptions} from "../../util/QueryParameters";
import * as SortOrder from "../../util/SortOrder";

// Public Classes ------------------------------------------------------------

class LibraryServices extends BaseParentServices<Library> {

    constructor () {
        super(Library, SortOrder.LIBRARIES, [
            "active",
            "name",
            "notes",
            "scope",
        ]);
    }

    // Model-Specific Methods ------------------------------------------------

/*
    public async authors(libraryId: number, query?: any): Promise<Author[]> {
        const library = await this.read("LibraryServices.authors", libraryId);
        const options: FindOptions = AuthorServices.appendMatchOptions({
            order: SortOrder.AUTHORS,
        }, query);
        return library.$get("authors", options);
    }
*/

    public async exact(name: string, query?: any): Promise<Library> {
        let options: FindOptions = this.appendIncludeOptions({
            where: { name: name }
        }, query);
        const results = await Library.findAll(options);
        if (results.length !== 1) {
            throw new NotFound(
                `name: Missing Library '${name}'`,
                "LibraryServices.exact");
        }
        return results[0];
    }

/*
    public async series(libraryId: number, query?: any): Promise<Series[]> {
        const library = await this.read("LibraryServices.series", libraryId);
        const options: FindOptions = SeriesServices.appendMatchOptions({
            order: SortOrder.SERIES,
        }, query);
        return library.$get("series", options);
    }
*/

/*
    public async stories(libraryId: number, query?: any): Promise<Story[]> {
        const library = await this.read("LibraryServices.stories", libraryId);
        const options: FindOptions = StoryServices.appendMatchOptions({
            order: SortOrder.STORIES,
        }, query);
        return library.$get("stories", options);
    }
*/

    /**
     * Return all users whose scope includes a scope value that starts with
     * the scope prefix for this Library.
     *
     * @param libraryId                 ID of this Library
     * @param query                     Optional query options
     */
/*
    public async users(libraryId: number, query?: any): Promise<User[]> {
        const library = await this.read("LibraryServices.users", libraryId);
        const pattern = `${library.scope}:`;
        const results = await UserServices.all(query);
        const users: User[] = [];
        results.forEach(result => {
            let match = false;
            const alloweds = result.scope.split(" ");
            alloweds.forEach(allowed => {
                if (allowed.startsWith(pattern)) {
                    match = true;
                }
            });
            if (match) {
                users.push(result);
            }
        })
        return users;
    }
*/

/*
    public async usersExact(libraryId: number, username: string, query?: any): Promise<User> {
        await this.read("LibraryServices.users", libraryId);
        return await UserServices.exact(username, query);
    }
*/

/*
    public async usersInsert(libraryId: number, user: User): Promise<User> {
        await this.read("LibraryServices.usersInsert", libraryId);
        return await UserServices.insert(user);
    }
*/

/*
    public async usersRemove(libraryId: number, userId: number): Promise<User> {
        await this.read("LibraryServices.usersRemove", libraryId);
        return await UserServices.remove(userId);
    }
*/

/*
    public async usersUpdate(libraryId: number, userId: number, user: User): Promise<User> {
        await this.read("LibraryServices.usersUpdate", libraryId);
        return await UserServices.update(userId, user);
    }
*/

/*
    public async volumes(libraryId: number, query?: any): Promise<Volume[]> {
        const library = await this.read("LibraryServices.volumes", libraryId);
        const options: FindOptions = VolumeServices.appendMatchOptions({
            order: SortOrder.VOLUMES,
        }, query);
        return library.$get("volumes", options);
    }
*/

    // Public Helpers --------------------------------------------------------

    /**
     * Supported include query parameters:
     * * withAuthors                    Include child Authors
     * * withSeries                     Include child Series
     * * withStories                    Include child Stories
     * * withVolumes                    Include child Volumes
     */
    public appendIncludeOptions(options: FindOptions, query?: any): FindOptions {
        if (!query) {
            return options;
        }
        options = appendPaginationOptions(options, query);
        const include: any = options.include ? options.include : [];
/*
        if ("" === query.withAuthors) {
            include.push(Author);
        }
        if ("" === query.withSeries) {
            include.push(Series);
        }
        if ("" === query.withStories) {
            include.push(Story);
        }
        if ("" === query.withVolumes) {
            include.push(Volume);
        }
*/
        if (include.length > 0) {
            options.include = include;
        }
        return options;
    }

    /**
     * Supported match query parameters:
     * * active                         Select active Libraries
     * * name={wildcard}                Select Libraries with name matching {wildcard}
     * * scope={scope}                  Select Libraries with scope equalling {scope}
     */
    public appendMatchOptions(options: FindOptions, query?: any): FindOptions {
        options = this.appendIncludeOptions(options, query);
        if (!query) {
            return options;
        }
        const where: any = options.where ? options.where : {};
        if (("" === query.active) || ("true" === query.active)) {
            where.active = true;
        }
        if (query.name) {
            where.name = { [Op.iLike]: `%${query.name}%` };
        }
        if (query.scope) {
            where.scope = query.scope;
        }
        if (Object.keys(where).length > 0) {
            options.where = where;
        }
        return options;
    }

}

const instance = new LibraryServices();
export default instance;
