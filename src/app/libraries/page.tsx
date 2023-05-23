// libraries/page.tsx --------------------------------------------------------

/**
 * Top page for the "Libraries" view.
 *
 * @packageNavigation
 */

// External Modules ----------------------------------------------------------

// Internal Modules ----------------------------------------------------------

import Library from "../models/Library";

// Public Objects ------------------------------------------------------------

export default function LibrariesView() {

    const columns: string[] = [
        "Name",
        "Active",
        "Notes",
        "Scope",
    ];

    const libraries: Library[] = [
        {
            id: 1,
            active: true,
            name: "Personal Library",
            notes: "For production only",
            scope: "personal"
        },
        {
            id: 2,
            active: true,
            name: "Test Library",
            scope: "test"
        },
        {
            id: 1,
            active: false,
            name: "Extra Library",
            scope: "extra"
        },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-col">
                <div className="items-center">Libraries View</div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-medium">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                <tr className="border border-indigo-500 border-solid">
                                    {columns.map((column, ri) => (
                                        <th key={ri} scope="col" className="px-4 py-2">
                                            {column}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {libraries.map((library) => (
                                    <Row key={library.id} library={library}/>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

// Private Objects -----------------------------------------------------------

interface RowProps {
    library: Library;
}

/**
 * Return a table row for the specified Library.
 */
function Row(props: RowProps)
{
    return (
        <tr className="border border-indigo-500 transition duration-300 ease-inout hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-4 py-1">{props.library.name}</td>
            <td className="whitespace-nowrap px-4 py-1">
                {props.library.active !== undefined ? String(props.library.active) : "true"}
            </td>
            <td className="whitespace-nowrap px-4 py-1">{props.library.notes}</td>
            <td className="whitespace-nowrap px-4 py-1">{props.library.scope}</td>
        </tr>
    )
}
