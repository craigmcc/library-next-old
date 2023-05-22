// libraries/page.tsx

/**
 * Top page for the "Libraries" view.
 *
 * @packageNavigation
 */

// External Modules ----------------------------------------------------------

// Internal Modules ----------------------------------------------------------

import LibrariesRow from "./LibrariesRow";
import {LibraryData} from "./types";

// Public Objects ------------------------------------------------------------

export default function LibrariesView() {

    const libraries: LibraryData[] = [
        { id: 1, firstName: "Mark", lastName: "Otto", handle: "@mdo" },
        { id: 2, firstName: "Jacob", lastName: "Thornton", handle: "@fat" },
        { id: 3, firstName: "Larry", lastName:"Wild", handle: "@twitter" },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex flex-col">
                <div className="items-center">Libraries View</div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">First</th>
                                    <th scope="col" className="px-6 py-4">Last</th>
                                    <th scope="col" className="px-6 py-4">Handle</th>
                                </tr>
                                </thead>
                                <tbody>
                                {libraries.map((library, rowIndex) => (
                                    <LibrariesRow key={rowIndex}
                                        id={library.id}
                                        firstName={library.firstName}
                                        lastName={library.lastName}
                                        handle={library.handle}
                                    />
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>        </main>
    )
}
