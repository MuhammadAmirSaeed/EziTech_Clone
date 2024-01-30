// import React from "react";
// import FlutterImage from "../Images/flutter.webp";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import { FaRegEye } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";

// const RecommendedCourses = () => {
//   return (
//     <button>
//       <div className="max-w-sm overflow-hidden rounded shadow-lg">
//         <img
//           className="w-full"
//           src={FlutterImage}
//           alt="Sunset in the mountains"
//         />
//         <button className="px-6 py-4">
//           <div className="mb-2 text-xl ">IOS&AND</div>
//           <p className="text-base text-gray-700">
//             Flutter and Dart Complete course
//           </p>
//         </button>
//         <div className="px-6 pt-4 pb-2">
//           <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
//             <AccessTimeIcon /> 3 months
//           </span>
//           <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
//             <FaRegEye /> 1000+
//           </span>
//         </div>
//         <hr />
//         <div className="flex flex-row">
//           <FaRegStar />
//           <FaRegStar />
//           <FaRegStar />
//           <FaRegStar />
//           <FaRegStar />
//         </div>
//         <div className="px-6 py-2">$50</div>
//       </div>
//     </button>
//   );
// };

// export default RecommendedCourses;

// RecommendedCourses.js

import React from "react";
import CoursesCard from "./CoursesCard";
import FlutterImage from "../Images/flutter.webp";
import AdobeIllustrator from "../Images/Adobe illustrator.webp";
import OnlineTrade from "../Images/online Arbitrage.png";
import FrontEnd from "../Images/Front end.webp";
import PhotoShop from "../Images/photoshop.png";

const RecommendedCourses = () => {
  return (
    <div>
      <div className="text-center my-10 mx-40">
        <h1 className=" font-montserrat text-5xl font-bold ">
          Recommended Course's
        </h1>
      </div>
      <div className="flex flex-row overflow-hidden gap-5">
        <CoursesCard
          image={FlutterImage}
          title="IOS&AND"
          description="Flutter and Dart Complete course"
          duration="3 months"
          views="1000+"
          rating={5}
          price="$100"
        />

        <CoursesCard
          image={AdobeIllustrator}
          title="Designing"
          description="Flutter and Dart Complete course"
          duration="3 months"
          views="1000+"
          rating={5}
          price="$50"
        />

        <CoursesCard
          image={OnlineTrade}
          title="IOS&AND"
          description="Flutter and Dart Complete course"
          duration="3 months"
          views="1000+"
          rating={5}
          price="$50"
        />

        <CoursesCard
          image={FrontEnd}
          title="IOS&AND"
          description="Flutter and Dart Complete course"
          duration="3 months"
          views="1000+"
          rating={5}
          price="$50"
        />

        <CoursesCard
          image={PhotoShop}
          title="IOS&AND"
          description="Flutter and Dart Complete course"
          duration="3 months"
          views="1000+"
          rating={5}
          price="$50"
        />
      </div>
    </div>
  );
};

export default RecommendedCourses;
