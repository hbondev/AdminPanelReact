// src/components/Table.jsx

export default function Table({ columns, data }) {
  return (
    <div className="overflow-x-auto scrollbar-thin">
      <table className="min-w-full text-sm rtl text-right border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-3 py-2 font-medium whitespace-nowrap"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-gray-200 dark:border-gray-800"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-3 py-2 whitespace-nowrap">
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
