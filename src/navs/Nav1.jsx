export function Nav1(params) {
  return(
    <nav className="flex justify-between text-white">
      <ul className="flex">
            <li><a href="">Students</a></li>
            <li><a href="">Alumni</a></li>
            <li><a href="">Self Service</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Library</a></li>
            <li><a href="">Security</a></li>
            <li><a href="">Feedback</a></li>
            <li><a href="">Contacts</a></li>
      </ul>
      <div>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  )
}