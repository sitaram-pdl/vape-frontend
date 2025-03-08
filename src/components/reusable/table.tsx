export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (item: T) => React.ReactNode;
  onColumnClick?: (item: T) => void;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
  return (
    <div className=" mx-auto mt-6 w-[95%]">
      <div className=" rounded-[4px] border border-black/20">
        <table className="w-full ">
          <thead>
            <tr className="border-b">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="p-2 text-left text-sm font-medium"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b text-sm last:border-b-0 hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <td key={String(column.key)}>
                    {column.onColumnClick ? (
                      <button
                        onClick={() => column.onColumnClick?.(item)}
                        className="w-full p-4 text-left focus:outline-none"
                      >
                        {column.render
                          ? column.render(item)
                          : (item[column.key] as React.ReactNode)}
                      </button>
                    ) : column.render ? (
                      column.render(item)
                    ) : (
                      (item[column.key] as React.ReactNode)
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
