export function Nav2() {
  return (
    <nav className="flex items-center justify-between p-2 bg-nav2 text-white">

    <a href="#" className="flex items-center space-x-2 text-lg font-semibold">
      <img src="src/assets/react.svg" alt="Mount University Logo" className="h-8 w-8" />
      <span>Mount University</span>
    </a>

    <div className="flex space-x-6 text-sm">
      <span className="flex flex-col">Call Us: <a href="tel:+2547383838" className="font-medium text-blue-600">+2547383838</a></span>
      <h1 className="flex flex-col">Email:
           <span className="font-medium text-orange-400">info@mount.co.ke</span>
      </h1>
    </div>


    <a href="#" className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
      Virtual Tour
    </a>
  </nav>

  )
}