import type { NextPage } from "next";
import Image from "next/image";
import { Card } from "../components/Card";

const Home: NextPage = () => {
  return <div className="mx-2 my-2 text-center">
    <p className="prose dark:prose-invert text-7xl">The First <br /> Self-Service Parking space in<br /></p>
    <p className="prose dark:prose-invert text-7xl text-teal-400">Gurgaon</p>

    <div className="max-w-full mx-2 mt-6 mb-4">
      <p className="prose max-w-full dark:prose-invert prose-lg">
        Run by a team of experienced professionals, we help you find the best parking space for your vehicle. <br />
        We also offer a variety of services for your vehicle while it is under our care
      </p>
    </div>

    <div className="max-w-full mx-2 my-4">
      <p className="prose max-w-full dark:prose-invert text-4xl">
        Our Services
      </p>

    </div>
    <div className="mx-10  content-center">
    <div className="flex justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 content-center self-center place-items-center">
      
      <Card
        title="Covered Parking"
        description="We provide you with a covered parking space for your vehicle."
        image="/covered_parking.jpg
        "
      />
      <Card
        title="Car wash"
        description="We provide you with a car wash service for your vehicle."
        image="/car_wash.jpg
        "
      />
      <Card
        title="Oil change"
        description="We provide you with a oil change service for your vehicle."
        image="/oil_change.jpg
        "
      />
    </div>
    </div>
    
  </div>
};

export default Home;
