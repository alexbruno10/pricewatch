import { GithubLogo, Envelope, LinkedinLogo } from "phosphor-react";

export default function Footer() {
  return (
    <>
      <footer className="mt-12 mb-14">
        <span className="flex justify-center items-center sm: text-sm">
          Desenvolvido por Álex Bruno Neri Humberto
        </span>
        <div className="flex gap-4 m-auto justify-center mt-2">
          <a href="https://www.linkedin.com/in/alexbruno10/" target="_blank">
          <LinkedinLogo className="hover:text-linkedin" size={32} weight="fill" />
          </a>
          <a href="https://github.com/alexbruno10" target="_blank">
          <GithubLogo className="hover:text-gray-dark" size={32} weight="fill" />
          </a>
          <a href="mailto:alex_brunoneri@hotmail.com" target="_blank">
          <Envelope className="hover:text-mail" size={32} weight="fill" />
          </a>
        </div>
      </footer>
    </>
  );
}
