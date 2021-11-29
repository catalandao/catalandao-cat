
interface Props {
  rows: Record<string, string>[];
}
const Table = ({ rows }: Props) => {
  const [single = {}] = rows;
  const headers = Object.keys(single);


  return (
    <>
      <table className="block lg:table lg:table--auto border w-full items-center bg-transparent w-full border-collapse">
        <thead className="hidden lg:table-header-group">
          <tr className="text-center text-md bg-yellow-500 text-white">
            {headers.map((h, i) => <th key={i} className="text-md">{h}</th>)}
          </tr>
        </thead>
        <tbody className="block lg:table-row-group lg:text-center max-h-128 lg:mx-auto overflow-y-scroll lg:overscroll-y-auto">
          {rows.map((row, i) => <tr className="flex flex-col lg:table-row even:bg-yellow-50 bg-yellow-100" key={i}>
            {headers.map((h) => <td className="p-1 lg:p-2 lg:border-r lg:border-b border-yellow-400 text-sm" key={h}>{row[h]}</td>)}
          </tr>)}
        </tbody>
        {/* <tfoot></tfoot> ?? */}
      </table>
    </>
  );
};

export default Table;
