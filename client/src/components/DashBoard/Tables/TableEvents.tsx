import { Link } from "react-router-dom";

export default function TableEvents() {

    const data = {
        body: [
            {
                name: 'Mike Monsalve',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
                category: 'eee',
                price: '60'
            },
            {
                name: 'Iván Reyes',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
                category: 'bobohpta',
                price: '80'
            },
            {
                name: 'Sebastian',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
                category: 'asd',
                price: '90'
            },
        ],

        head: [
            'Product Name', 'Image', 'Category', 'Price', 'Edit'
        ]

    }

    return (
        <>
            <div className="max-w-2xl mx-auto">
                                <h1>Table Events</h1>
                <div className="flex flex-col">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block min-w-full align-middle">
                            <div className="overflow-hidden ">
                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead className="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                            {
                                                data.head.map((e, i) => {
                                                    return (
                                                        <th key={i} scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 capitalize dark:text-gray-400">
                                                            {e}
                                                        </th>
                                                    )
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                        {
                                            data.body.map((e, i) => {
                                                return (
                                                    <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.name}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><img className="h-12 rounded-full" src={e.image} alt="LLO" /></td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{e.category}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.price}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.price}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.price}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.price}</td>

                                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                            <Link to=':id' className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Edit</Link>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





