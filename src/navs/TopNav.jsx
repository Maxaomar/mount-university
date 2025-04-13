export function TopNav() {
  return(
    <nav className="flex justify-evenly items-center text-navText text-base navs">
      <ul className="flex">
            <li className="list-item"><a href="">Students</a></li>
            <li className="list-item"><a href="">Alumni</a></li>
            <li className="list-item"><a href="">Self Service</a></li>
            <li className="list-item"><a href="">Careers</a></li>
            <li className="list-item"><a href="">Library</a></li>
            <li className="list-item"><a href="">Security</a></li>
            <li className="list-item"><a href="">Feedback</a></li>
            <li className="list-item"><a href="">Contacts</a></li>
      </ul>


      <div className="flex items-center gap-4">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  )
}