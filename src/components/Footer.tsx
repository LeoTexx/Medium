export function Footer() {
  return (
    <footer className=" p-5  shadow-md shadow-black">
      <div className="mx-auto  flex max-w-7xl items-center justify-between ">
        <p>
          © Made By:{' '}
          <a
            className="font-semibold  text-green-600 transition-colors hover:text-green-800"
            href="https://github.com/LeoTexx"
          >
            Leo Teixeira
          </a>{' '}
        </p>

        <a
          href="https://github.com/LeoTexx/Medium"
          className="rounded-full border border-green-600 px-4 py-1 font-semibold text-green-600 transition-colors  hover:bg-green-600 hover:text-white "
        >
          Check the source code
        </a>
      </div>
    </footer>
  )
}
