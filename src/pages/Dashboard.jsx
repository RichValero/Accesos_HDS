import { Ellipsis, OctagonX, Plus, UserPen } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/poppins";
import { SideBar } from "../components/SideBar";
import { Button } from "../components/Forms/Button";

const Dashboard = () => {
  return (
    <section className="flex gap-5">
      <SideBar />
      <div className="w-full px-10 pt-5">
        {/* DASHBOARD NAVBAR START*/}
        {/* <div className="flex justify-end items-center w-full mt-10 mb-3 mx-auto">
          <Link to="/register">
            <button
              type="button"
              className="px-3 gap-2 text-white bg-primary rounded-lg flex items-center font-poppins"
            >
              <Plus size={32} strokeWidth={3} color="#f2f2f2" />
              Agregar Usuario
            </button>
          </Link>
        </div> */}
        {/* DASHBOARD NAVBAR END  */}

        {/* DASHBOARD CONTENT */}
        <Button variant="dashboard" size="dashboard">
          Usuarios
        </Button>
        <Button variant="dashboard" size="dashboard">
          Todas las solicitudes
        </Button>
        <Button variant="dashboard" size="dashboard">
          Activas
        </Button>
        <Button variant="dashboard" size="dashboard">
          Pendientes
        </Button>
        <div className="flex flex-col shadow-xl h-screen mb-10 bg-white">
          <div className="">
            <div className="flex flex-1 justify-evenly items-center">
              <table className="table-auto w-full text-center font-poppins ">
                <thead>
                  <tr className="font-semibold">
                    <th className="py-1 border text-center  p-4">ID</th>
                    <th className="py-1 border text-center  p-4">Nombre</th>
                    <th className="py-1 border text-center  p-4">Correo</th>
                    <th className="py-1 border text-center  p-4">
                      Departamento
                    </th>
                    <th className="py-1 border text-center  p-4">Estado</th>
                    <th className="py-1 border text-center  p-4">Accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-1 border text-center  p-4">01</td>
                    <td className="py-1 border text-center  p-4">
                      Cynthia Soto
                    </td>
                    <td className="py-1 border text-center  p-4">
                      csoto@hsalvador.cl
                    </td>
                    <td className="py-1 border text-center  p-4">
                      Informatica
                    </td>
                    <td className="py-1 border text-center  p-4">Activo</td>
                    <td className="py-1 border text-center  p-4">
                      <button>
                        <Ellipsis size={24} strokeWidth={3} color="#000000" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

// <div class="relative overflow-hidden shadow-md rounded-lg">
//     <table class="table-fixed w-full text-left">
//         <thead class="uppercase bg-[#6b7280] text-[#e5e7eb]" style="background-color: rgb(107, 114, 128); color: rgb(229, 231, 235); --darkreader-inline-bgcolor: #586064; --darkreader-inline-color: #d9d6d1;" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">
//             <tr>
//                 <!--[-->
//                 <td class="py-1 border text-center  p-4" contenteditable="true">Product-ID</td>
//                 <td class="py-1 border text-center  p-4" contenteditable="true">Description</td>
//                 <td class="py-1 border text-center  p-4" contenteditable="true">Price</td>
//                 <!--]-->
//             </tr>
//         </thead>
//         <tbody class="bg-white text-gray-500 bg-[#FFFFFF] text-[#6b7280]" style="background-color: rgb(255, 255, 255); color: rgb(107, 114, 128); --darkreader-inline-bgcolor: #181a1b; --darkreader-inline-color: #9e9589;" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">
//             <!--[-->
//             <tr class=" py-5">
//                 <!--[-->
//                 <td class=" py-5 border text-center  p-4" contenteditable="true">YY-853581</td>
//                 <td class=" py-5 border text-center  p-4" contenteditable="true">Notebook Basic</td>
//                 <td class=" py-5 border text-center  p-4" contenteditable="true">$ 299</td>
//                 <!--]-->
//             </tr>
//             <tr class=" py-5">
//                 <!--[-->
//                 <td class=" py-5 border text-center  p-4" contenteditable="true">YY-853599</td>
//                 <td class=" py-5 border text-center  p-4" contenteditable="true">Notebook Pro</td>
//                 <td class=" py-5 border text-center  p-4" contenteditable="true">$ 849</td>
//                 <!--]-->
//             </tr>
//             <!--]-->
//         </tbody>
//     </table>
// </div>
