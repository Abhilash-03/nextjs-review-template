import RatingProduct from "@/components/RatingProduct";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const subHeading1 = "How much would you like to rate Trausti";
  const subHeading2 = "Do you like to recommend Trausti to others";
  const subHeading3 = "What would you say about Trausti";
  return (
    <main className="max-w-3xl m-auto bg-slate-100 rounded-lg h-screen" >
       <IoClose className="text-2xl font-bold mt-2 ml-3 cursor-pointer" />
      <h1 className="text-2xl md:text-3xl font-bold px-5 py-4">Leave a review</h1>
      
      <RatingProduct title={'Safety'} subHeading={subHeading1} option={'star'} />
      <RatingProduct title={'Communication'} subHeading={subHeading1} option={'star'} />
      <RatingProduct title={'Would you recommend Trausti?'} subHeading={subHeading2} option={'yesNo'} />
      <RatingProduct title={'Praise'} subHeading={subHeading3} option={'select'} />
    </main>
  );
}
