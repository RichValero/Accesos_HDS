import {
  House,
  LogIn,
  MailPlus,
  UserRoundPlusIcon,
  Shield,
  ListCollapse,
} from "lucide-react";

export const NavList = [
  {
    route: "/",
    label: "Inicio",
  },
  {
    route: "/",
    label: "Tickets Informática",
  },
  {
    route: "/contacts",
    label: "Contactos",
  },
];

export const headerList = [
  {
    imgUrl: "./assets/gps.png",
    label: "Av. Salvador 364, Providencia RM",
  },
  {
    imgUrl: "./assets/email.png",
    label: "soporte@hsalvador.cl",
  },
  {
    imgUrl: "./assets/phone.png",
    label: "2 25753851 / (253851)",
  },
  {
    imgUrl: "./assets/phone.png",
    label: "Clave Amarilla (254243)",
  },
];

export const cardList = [
  {
    id: 0,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://intranethds.hsalvador.cl/",
    label: "Intranet",
  },
  {
    id: 1,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://ris.hsalvador.cl/",
    label: "MRIS",
    category: "clinic",
  },
  {
    id: 2,
    imgUrl: "./assets/icons/syslab.jpg",
    route: "http://10.6.198.50:8080/syslab/index.php",
    label: "SYSLAB",
    category: "clinic",
  },
  {
    id: 3,
    imgUrl: "./assets/icons/proactive.jpg",
    route: "https://examenesusuarios.hsalvador.cl/",
    label: "Proactive LIS",
    category: "clinic",
  },
  {
    id: 4,
    imgUrl: "./assets/icons/trakcare.jpg",
    route:
      "https://trakcare.intersystemschile.cl/sdor/csp/system.Home.cls#/Component/SSUserLogon",
    label: "Trakcare",
    category: "clinic",
  },
  {
    id: 5,
    imgUrl: "./assets/icons/trakcare.jpg",
    route:
      "https://salud.intersystemschile.cl/sdor/csp/system.Home.cls#/Component/SSUserLogon",
    label: "Trakcare Contingencia",
    category: "clinic",
  },
  {
    id: 6,
    imgUrl: "./assets/icons/intranet.png",
    route: "http://sam.hsalvador.cl/",
    label: "SAM",
    category: "clinic",
  },
  {
    id: 7,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://gesdoc.hsalvador.cl/",
    label: "GESDOC",
    category: "admin",
  },
  {
    id: 8,
    imgUrl: "./assets/icons/lm.jpg",
    route: "https://www.licencia.cl/v2/produccion/",
    label: "Licencias",
    category: "clinic",
  },
  {
    id: 9,
    imgUrl: "./assets/icons/seis.jpg",
    route: "https://salvador.experthis.cl/produccion/login.php",
    label: "SEIS",
    category: "admin",
  },
  {
    id: 10,
    imgUrl: "./assets/icons/rflex.jpg",
    route: "https://hsalvador.rflex.io/login",
    label: "rFlex",
    category: "admin",
  },
  {
    id: 11,
    imgUrl: "./assets/icons/serq.jpg",
    route: "https://salud.serq.cl/Account/Index?ReturnUrl=%2f",
    label: "SerQ",
    category: "admin",
  },
  {
    id: 12,
    imgUrl: "./assets/icons/intranet.png",
    route: "http://10.8.97.136/autoconsulta/",
    label: "Autoconsulta",
    category: "admin",
  },
  {
    id: 13,
    imgUrl: "./assets/icons/intranet.png",
    route: "http://uap.hsalvador.cl/Login.aspx?ReturnUrl=%2f",
    label: "UAP",
    category: "clinic",
  },
  {
    id: 14,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://asclepio.hsalvador.cl/",
    label: "Asclepio",
    category: "clinic",
  },
  {
    id: 15,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://infectologia.hsalvador.cl/",
    label: "Infectología",
    category: "clinic",
  },
  {
    id: 16,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://oftalmologia.hsalvador.cl/",
    label: "Oftalmología",
    category: "clinic",
  },
  {
    id: 17,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://laboratorio.hsalvador.cl/hematologia/",
    label: "Laboratorio Hematología",
    category: "clinic",
  },

  {
    id: 18,
    imgUrl: "./assets/icons/ssmo.jpg",
    route: "https://bienestar.saludoriente.cl",
    label: "Bienestar Oriente",
    category: "admin",
  },
  {
    id: 19,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://cursos.hsalvador.cl/",
    label: "Cursos HDS",
    category: "admin",
  },
  {
    id: 20,
    imgUrl: "./assets/icons/intranet.png",
    route: "https://www.hsalvador.cl",
    label: "WEB HDS",
    category: "admin",
  },
  {
    id: 21,
    imgUrl: "./assets/icons/proactive.jpg",
    route: "https://examenespacientes.hsalvador.cl/",
    label: "Exámenes Pacientes HDS",
    category: "clinic",
  },
];

export const contactList = [
  {
    id: 0,
    title: "INFORMÁTICA",
    subtitle: "Anexo:  253851",
  },
  {
    id: 1,
    title: "PROACTIVE LIS",
    subtitle: "Anexo: 254245",
    email: "Correo: abondi@hsalvador.cl",
  },
  {
    id: 2,
    title: "TRAKCARE",
    subtitle: "Anexo:  254333 / 287210",
    email: "soportesidrahds@hsalvador.cl",
  },
  {
    id: 3,
    title: "SOLICITUD DE TÓNER",
    subtitle: "Solo vía correo",
    email: "impresoras@hsalvador.cl",
  },
  {
    id: 4,
    title: "SAM - GESDOC",
    subtitle: "Solo vía correo",
    email: "desarrollo@hsalvador.cl",
  },
  {
    id: 5,
    title: "SEIS",
    email: "mesadeayuda@sistemasexpertos.cl",
  },
  {
    id: 6,
    title: "MANTENCIÓN",
    subtitle: "Anexo: 254213",
  },
];

export const sideBarList = [
  {
    id: 0,
    icon: House,
    label: "Inicio",
    url: "/",
  },
  {
    id: 1,
    icon: ListCollapse,
    label: "Lista de Solicitudes",
    url: "/dashboard",
  },
  {
    id: 2,
    icon: Shield,
    label: "Solicitud de VPN",
    url: "/stepone",
  },
  {
    id: 3,
    icon: MailPlus,
    label: "Solicitud de Correo",
    url: "/email",
  },
  {
    id: 4,
    icon: House,
    label: "Perfil",
    url: "#",
  },
];

export const adminSideBarList = [
  {
    id: 0,
    icon: UserRoundPlusIcon,
    label: "Crear Usuario",
    url: "/register",
  },
];
