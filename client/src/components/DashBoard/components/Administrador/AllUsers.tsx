import { Link } from "react-router-dom";

export default function AllUsers() {

    const data = {
        body: [
            {
                name: 'Mike ',
                lastName: 'Monsalve',
                email: 'mike@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ADMIN',
                price: '60',
                Available: 'false',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            },
            {
                name: 'Iván ',
                lastName: 'Reyes',
                email: 'Iván@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'false',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            },
            {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'false',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            },
            {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'false',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            }, {
                name: 'Sebastian ',
                lastName: 'Reyes',
                email: 'Sebastian@gmail.com',
                city: 'Medellin',
                country: 'Colombia',
                rol: 'ARTIST',
                Available: 'true',
                image: 'https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg',
            },
        ],

        head: [
            'Image', 'Names', 'email', 'Rol', 'Ubication', 'Available'
        ]

    }
    return (
        <>
            <div className=" h-screen mx-auto">
                <div className=" flex flex-col">
                    <h1>Table Users</h1>
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="inline-block m-w-full align-middle">
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
                                    <tbody className="bg-white divide-y  divide-gray-800 dark:bg-gray-800 dark:divide-gray-00">
                                        {
                                            data.body.map((e, i) => {
                                                return (
                                                    <tr key={i} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><img className="h-12 rounded-full" src={e.image} alt="LLO" /></td>
                                                        <Link to=':id'>
                                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.name} {e.lastName}</td>
                                                        </Link>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.email}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{e.rol}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{e.city} {e.country}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{e.Available}</td>
                                                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                            {/* <Link to=':id' className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer whitespace-nowrap">Edit</Link> */}
                                                        </td>
                                                        <td className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer whitespace-nowrap">
                                                            {e.Available === 'true' ? <td>Deshabilitar</td> : <td>Habilitar</td>}
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