
import { Dropdown } from "flowbite-react";
import BannerImg from '../../Assets/Herotext.png'
import bgImage from '../../Assets/Herobackground.png'

export const Homepage  = () => {
    return (


<div class="font-[sans-serif]">
    
      <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4 row">
        <div class="max-w-md w-full column">

          <div class="p-8 ">
            <h2 class="text-black text-center text-2xl font-bold">Choose Service</h2>
            <div className="flex items-center gap-4">
                <div>
      <Dropdown label="max dropdown" size="max">
        <Dropdown.Item>IELTS</Dropdown.Item>
        <Dropdown.Item>Tofel</Dropdown.Item>
        <Dropdown.Item>PTE</Dropdown.Item>
      </Dropdown>
      </div>
      <div  className="flex items-center gap-4">
      <Dropdown label="Large dropdown" size="lg">
        <Dropdown.Item>Default</Dropdown.Item>

      </Dropdown>
      </div>
    </div>
          </div>
        </div>
      </div>




      <div className="w-96 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
      <ul className="space-y-4">
        <li className="flex items-center">
          <span className="mr-4 text-gray-500">
            {/* Icon for Service */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 10-8 0v4M5 11h14M9 11v4m6-4v4m-6 4h6"
              />
            </svg>
          </span>
          <span className="text-gray-700">Service</span>
        </li>
        <li className="flex items-center">
          <span className="mr-4 text-gray-500">
            {/* Icon for Employee */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 21v-2a4 4 0 00-8 0v2m4-10a4 4 0 100-8 4 4 0 000 8z"
              />
            </svg>
          </span>
          <span className="text-gray-700">Employee</span>
        </li>
        <li className="flex items-center">
          <span className="mr-4 text-gray-500">
            {/* Icon for Location */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-4.418 0-8 3.134-8 7v1h16v-1c0-3.866-3.582-7-8-7z"
              />
            </svg>
          </span>
          <span className="text-gray-700">Location</span>
        </li>
        <li className="flex items-center">
          <span className="mr-4 text-gray-500">
            {/* Icon for Date & Time */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V5a1 1 0 011-1h6a1 1 0 011 1v2m-1 4H9m4 4H9m10 5H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
              />
            </svg>
          </span>
          <span className="text-gray-700">Date & Time</span>
        </li>
      </ul>
    </div>
    </div>



    )
}

export default Homepage;


