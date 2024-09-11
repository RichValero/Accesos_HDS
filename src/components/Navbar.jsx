import { NavList } from "../constants";

const Navbar = () => {
  return (
    <header className=" w-full py-10 px-10 flex justify-between items-center">
      <nav className="flex w-full">
        <div className="flex flex-1 justify-between items-center">
          <img
            src="./assets/logo.jpg"
            alt="logo"
            className="m-0 w-[400px] h-[100px]"
            href="/"
          />
          {NavList.map((nav) => (
            <div key={nav} className="text-3xl text-primary font-bold">
              <a href={nav.route}>{nav.label}</a>
            </div>
          ))}
          {/* <h1 className="text-3xl text-primary font-bold">
            ACCESO DIRECTO A PLATAFORMAS HOSPITALARIAS
          </h1>
          <h2
            className="text-2xl text-primary font-semibold cursor-pointer"
            href="/contactos"
          >
            CONTACTOS
          </h2> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

{
  /* <h1 className="text-3xl text-primary font-bold">
  ACCESO DIRECTO A PLATAFORMAS HOSPITALARIAS
</h1>
<h2 className="text-2xl text-primary font-semibold">CONTACTOS</h2> */
}
