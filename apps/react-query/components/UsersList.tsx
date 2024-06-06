"use client";

import { useUsersControllerFindAllSuspense } from "@/api/endpoints/genAll";

export function UsersList() {
  const { data: users } = useUsersControllerFindAllSuspense();

  return (
    <div className="flex flex-col w-full">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
              <thead className="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    sex
                  </th>
                  <th scope="col" className="px-6 py-4">
                    age
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`border-b border-neutral-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-black/[0.02]"
                    } dark:border-white/10 dark:bg-body-dark`}
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {user.id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.sex as any}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{user.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
