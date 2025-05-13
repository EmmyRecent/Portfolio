import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="main-wrapper">
      <p className="w-full py-6 text-center text-sm">
        Built by{" "}
        <Link href="#" className="cursor-pointer">
          <span>Chukwuemeka</span>
        </Link>{" "}
        | © {year} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
