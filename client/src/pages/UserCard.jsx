// import Image from "next/image";
// import { useRecoilState } from "recoil";
// import { modalState } from "../atoms/modalAtom";
// import { selectedUserState } from "../atoms/selectedUserAtom";
// import { TableDataType } from "../types";
// import { RiGitMergeFill } from "react-icons/ri";
import { useState } from "react";

const UserCard = ({ data, index }) => {
//   const [isModalOpen, setModalOpen] = useRecoilState(modalState);
//   const [userData, setUserData] = useRecoilState(selectedUserState);
//   const [data,setData] = useState({
//     rank:0,
//     avatar_url:'',
//     user_name:'Name',
//     full_name:'name',
//     college:'JGEC',
//     user_url:'',
//     total_points:0
//   })

  return (
    <tr>
      <td className="border-b border-white bg-[rgba(49,49,49,0.5)]">
        <p className="items-center font-codefont text-xl font-semibold text-[#2fbc1d] text-center lg:px-3 lg:py-4 lg:text-lg md:text-base">
          # {index+1}
        </p>
      </td>
      <td className="p-5 border-b border-white bg-[rgba(49,49,49,0.5)] w-1/2 lg:px-3 lg:py-4">
        <div className="flex items-center">
          {/* <div className="flex-shrink-0 w-12 h-12 mr-5 lg:hidden">
            <img
              className="w-full h-full rounded-full"
              src={data.avatar_url}
              alt={data.user_name}
              height={60}
              width={60}
            />
          </div> */}
          <div>
            <p className="font-codefont text-xl font-medium text-white tracking-wide capitalize lg:text-lg md:text-base">
              {data.name}
            </p>
            <p className="font-curlfont text-base font-semibold text-white">
              {data.college}
            </p>
          </div>
        </div>
      </td>
      <td className="p-5 border-b border-white bg-[rgba(49,49,49,0.5)] text-center lg:px-3 lg:py-4 xs:hidden">
        <span className="font-codefont text-xl font-medium text-white lg:text-base">
          {data.score}
        </span>
      </td>
      <td className="p-5 border-b border-white bg-[rgba(49,49,49,0.5)] ">
        <p className="font-mainfont text-lg font-medium text-white text-center">
          {data.challengeCount}
        </p>
      </td>
    </tr>
  );
};

export default UserCard;
