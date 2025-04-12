export default function TailwindTest() {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Tailwind Test Table</h2>
        <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Name</th>
              <th className="text-left px-4 py-2 border-b">Email</th>
              <th className="text-left px-4 py-2 border-b">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">Alice</td>
              <td className="px-4 py-2 border-b">alice@example.com</td>
              <td className="px-4 py-2 border-b">Admin</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">Bob</td>
              <td className="px-4 py-2 border-b">bob@example.com</td>
              <td className="px-4 py-2 border-b">User</td>
            </tr>
          </tbody>
          <div className="p-8">
  <h2 className="text-2xl font-bold mb-4 text-blue-600">Tailwind Test Table</h2>
  <p className="text-sm text-red-500">If this text is red, colors are working 🎯</p>
</div>

        </table>
      </div>
    );
  }
  