
const Navbar=()=>{
    return (
        <nav>
            <div>
                <button>
                    <span>
                    <i class="fa-solid fa-location-dot"></i>
                    <p>Madhapur</p><i class="fa-solid fa-angle-down"></i>
                    </span>
                </button>
                <span className="search"> 
                <button>  
                <i class="fa-solid fa-magnifying-glass"></i>
                </button> 
                <input type="text" />
                </span>
                <span><button className="search-btn">search</button></span>
            </div>
        </nav>
    )
}

export default Navbar