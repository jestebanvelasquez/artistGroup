import Table from "./components/Table";
import IsLogged from "./components/isLogged";

export default function AdminPanel() {
  return (
    <>
      <IsLogged />
      <div className="flex flex-row justify-end">
        <button className="px-3 py-2 text-white bg-red-500 m-3 rounded">Logout</button>
      </div>
      <h1>Admin panel component</h1>
      <Table />
    </>
  )
}
