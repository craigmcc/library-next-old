// libraries/LibrariesRow.tsx

/**
 * Single row for the LibrariesList table.
 *
 * @packageDocumentation
 */

// Internal Modules ----------------------------------------------------------

import {LibraryData} from "./types";

// Public Objects ------------------------------------------------------------

export default function LibrariesRow(library: LibraryData) {

    return (
        <tr
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">{library.id}</td>
            <td className="whitespace-nowrap px-6 py-4">{library.firstName}</td>
            <td className="whitespace-nowrap px-6 py-4">{library.lastName}</td>
            <td className="whitespace-nowrap px-6 py-4">{library.handle}</td>
        </tr>
    )

}
