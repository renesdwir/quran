import { ToggleThemeButton } from "./buttons/ToggleThemeButton";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center p-4 border-b ">
        <Logo />
        <ToggleThemeButton />
      </div>
    </>
  );
}
