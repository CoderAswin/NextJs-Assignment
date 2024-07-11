
import Image from 'next/image';


const Nav = () => {

  
  return (
    <div>
      
      <nav style={{ height: "80px" }} class="navbar navbar-light bg-light">

        <div class="container" style={{ display: "flex", alignItems: "center" }}>
          <div>
            <a class="navbar-brand" href="#">
              <Image src="/assets/hobbycue.png" width={293.26} height={60} />
            </a>
          </div>

          <div>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button style={{ backgroundColor: "#8064A2" }} class="btn" type="submit">
                <Image src="/assets/search.png" width={17} height={14} />
              </button>
            </form>
          </div>


          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src="/assets/explore.png" width={24} height={24} />
              <button class=" btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Explore
              </button>
            </div>
            <ul class="dropdown-menu">
              ...
            </ul>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src="/assets/Hobbies.png" width={24} height={24} />
              <button class=" btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hobbies
              </button>
            </div>
            <ul class="dropdown-menu">
              ...
            </ul>
          </div>

          <div>
            <Image src="/assets/vector.png" width={14} height={18} />
          </div>

          <div>
            <Image src="/assets/bell.png" width={17} height={17} />
          </div>

          <div>
            <Image src="/assets/product3.png" width={24} height={24} />
          </div>


          <div>
            <button style={{ borderColor: "#8064A2" }} type="button" class="btn">Sign In</button>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Nav

