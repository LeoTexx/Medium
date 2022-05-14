export function Banner() {
  return (
    <section className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
      <div className="space-y-5 px-10 ">
        <h1 className="max-w-xl font-serif text-6xl">
          This is the{' '}
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{' '}
          clone built by Leo{' '}
        </h1>
        <h2>This project is built with NextJS, TailwindCSS and Typescript.</h2>
      </div>
      <img
        className="hidden  h-32  md:inline-flex lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="Large M letter representing Medium Logo"
      />
    </section>
  )
}
