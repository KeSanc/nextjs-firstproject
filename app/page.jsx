import Users from "@/components/Users";
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json();
  return data.data;
}

export default async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div className="">
      <h1>Index Page</h1>
      <Users users={users} />
    </div>
  );
}