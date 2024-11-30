
import { Dropdown } from "flowbite-react";
import BannerImg from '../../Assets/Herotext.png'
import bgImage from '../../Assets/Herobackground.png'

export const Banner  = () => {
    return (
    //     <div>
    //     <div className="image-banner">
    //   <div className="image-banner-overlay"></div>
    //   <div className="image-banner-content">
    //     <h1>Welcome to My Website</h1>
    //     <p>Experience the best content and services</p>
    //   </div>
    // </div>


<div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="bgImage" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        {/* <h2 class="sm:text-4xl text-2xl font-bold mb-6"></h2> */}

      </div>
    </div>
    )
}

export default Banner;

