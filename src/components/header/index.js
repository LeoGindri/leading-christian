// import EmailIcon from "../../../public/icons/envelope-at-fill.svg";

import Link from "next/link";

const HeaderComponent = () => {
  return (
    <div className="w-full flex justify-between pt-14">
      <div>
        {/* <EmailIcon className="text-zinc-950" /> */}
        <h2 className="text-xl font-bold">Christian M</h2>
      </div>
      <nav>
        <ul className="flex gap-5 text-xs font-bold">
          <li>
            <button>Consultoria</button>
          </li>
          <li>
            <button>Sobre</button>
          </li>
          <li>
            <button>Contato</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default HeaderComponent;
