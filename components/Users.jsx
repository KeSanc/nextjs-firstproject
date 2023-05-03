"use client";
import { useRouter } from "next/navigation";
export default function Users({users}) {
    const router = useRouter();
    return (
        <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {
                users.map((user) => ( 
                    <li className=" hover:bg-green-300 cursor-pointer flex justify-between items-center w-full px-4 py-2 border-b border-gray-200 rounded-sm dark:border-gray-600" key={user.id} onClick={()=> {router.push(`/users/${user.id} `)}}>
                        <div className="">
                            <h5 className="font-bold">{user.id}. {user.first_name} {user.last_name} </h5>
                            <p>{user.email} </p>

                        </div>
                        <img className="rounded-full" src={user.avatar} alt={user.email} />
                    </li>
                ))
            }
        </ul>
    
    );
}