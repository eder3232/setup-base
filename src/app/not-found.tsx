import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
        404
      </h1>
      <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Algo salió mal.
      </p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para
        explorar en la página de inicio.{" "}
      </p>
      <Link
        href="/"
        className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
      >
        Regresar a la página principal.
      </Link>
    </div>
  );
}
