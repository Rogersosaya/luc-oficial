import Link from "next/link";
import { Logo } from "../../icons/logo";
// import { SlackIcon } from "./icons/slack";
import { FaTwitter } from "react-icons/fa";
import Container from '../../container/Container';

const footerLinks = [
  {
    title: "Redes sociales",
    links: [
      { title: "Facebook", href: "#" },
      { title: "Twitter", href: "#" },
      { title: "Instagram", href: "#" },
      { title: "Youtube", href: "#" },
      
    ],
  },
  {
    title: "Contact",
    links: [
      { title: "Email", href: "teamluc12321@gmail.com" },
      
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { title: "Community", href: "#" },
  //     { title: "Contact", href: "#" },
  //     { title: "DPA", href: "#" },
  //     { title: "Terms of service", href: "#" },
  //   ],
  // },
  // {
  //   title: "Developers",
  //   links: [
  //     { title: "API", href: "#" },
  //     { title: "Status", href: "#" },
  //     { title: "GitHub", href: "#" },
  //   ],
  // },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-grey">

            <Logo className="mr-4 h-11 w-11 flex items-center" /> LUC - Lo cambia todo
          </div>
         
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);