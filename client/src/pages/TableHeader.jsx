const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th className="px-4 py-5 border-b-2 border-gray-200 bg-gray-800 text-center text-base font-semibold text-white  tracking-wider lg:text-sm">
            Rank
          </th>
          <th className="px-4 py-5 border-b-2 border-gray-200 bg-gray-800 text-left text-base font-semibold text-white  tracking-wider lg:text-sm">
            Player&apos;s Info
          </th>
          <th className="px-4 py-5 border-b-2 border-gray-200 bg-gray-800 text-center text-base font-semibold text-white  tracking-wider lg:text-sm ">
            Score
          </th>
          <th className="px-4 py-5 border-b-2 border-gray-200 bg-gray-800 text-center text-base font-semibold text-white  tracking-wider">
            No. of challenges solved
          </th>
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;
  