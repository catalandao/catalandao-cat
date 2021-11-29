
interface Props {
  rows: Record<string, string>[];
}
const Table = ({ rows }: Props) => {
  const [single = {}] = rows;
  const headers = Object.keys(single);


  return (
    <>
      <table className="border w-full items-center bg-transparent w-full border-collapse">
        <thead>
          <tr className="text-center text-md bg-yellow-500 text-white">
            {headers.map((h, i) => <th key={i} className="text-md">{h}</th>)}
          </tr>
        </thead>
        <tbody className="lg:text-center max-h-128 lg:mx-auto overflow-y-scroll lg:overscroll-y-auto">
          {rows.map((row, i) => <tr className="even:bg-yellow-50 bg-yellow-100" key={i}>
            {headers.map((h) => <td title={row[h]} className="lg:text-md max-w-20 p-1 border-yellow-400 text-sm truncate max-w-xs" key={h}>{row[h]}</td>)}
          </tr>)}
        </tbody>
        {/* <tfoot></tfoot> ?? */}
      </table>
    </>
  );
};

export default Table;
