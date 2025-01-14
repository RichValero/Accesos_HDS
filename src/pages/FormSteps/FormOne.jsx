// import React from "react";
// import { StepOne } from "./Step-One";
// import { StepTwo } from "./Step-Two";
// import { Button } from "../../components/Forms/index";
// import { SideBar } from "../../components/Layout";
// import { ArrowRightToLine } from "lucide-react";

// const FormOne = () => {
//   return (
//     // Main container that spans full width with responsive padding
//     <section className="container">
//       {/* Outer flex container to handle sidebar and main content layout */}
//       <div className="flex flex-col lg:flex-row gap-48">
//         {/* Sidebar container - collapses to full width on mobile */}
//         <aside className="w-full lg:w-80 shrink-0">
//           {/* You can replace this with your sidebar content */}
//           <div className="bg-gray-100 rounded-lg p-4 h-full">
//             <SideBar />
//           </div>
//         </aside>

//         {/* Main content area - takes remaining width */}
//         <main className="mx-auto flex-1 pl-10">
//           {/* Grid container for the form steps */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//             <div className="w-full">
//               <StepOne />
//             </div>
//             <div className="w-full">
//               <StepTwo />
//             </div>
//           </div>
//           <div className="">
//             <Button variant="primary" size="large">
//               Siguiente <ArrowRightToLine size={20} />
//             </Button>
//           </div>
//         </main>
//       </div>
//     </section>
//   );
// };

// export default FormOne;
