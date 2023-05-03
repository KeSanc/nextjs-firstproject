async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data;
}
export default async function UsersPage({ params }) {

    const user = await getUser(params.id);

    return (
        <>
            <h1 className="font-bold text-lg mb-5">User Details</h1>
            <div className="mx-auto p-6 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.id}. {user.first_name} {user.last_name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{user.email}</span>
                </div>
            </div>
        </>);
}