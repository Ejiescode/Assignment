import { FaArrowRightLong } from "react-icons/fa6";
function HeroSection (){
return(
   <section className="h-screen flex flex-column items-center">
    <div className="text-center px-9 mb-[900px]">
    <p className="text-[#717171] text-capitalize text-[14px] mt-0 lg:mt-80 ">
        ALL-IN-ONE MARKETING SOFTWARE </p>
    <h1 className="lg:text-[62px] font-bold text-[30px] ">Send emails, automate marketing,
    monetize content – in one place</h1>
    <p className="text-[20px] text-center text-black">Grow your business and boost revenue with an easy, affordable platform that brings email, <br/>
    automation, online courses and paid newsletters together.</p>
    <button className="hover:bg-[#00a2ff] hover:text-white w-fit mt-10 py-2 px-8  font-bold border-2 
    hover:border-[#00a2ff] bg-[#fbe30c] rounded-3xl border-[#fbe30c]">Start 30-day FREE trial
    <FaArrowRightLong className="text-xm"/></button>
     <p className="text-xs mt-3">Try us free  |  No credit card required  |  Cancel anytime</p>
    
     <div className="border-2 w-20 font-bold flex flex-column items-center mb-[]">
    </div>
  <ul className="flex gap-6 justify-between"> 
     <li className=" font-bold text-left px-[20px] lg:px-10 border-2 h-[45vh] lg:h-[80vh] py-10 text-[20px] 
     lg:text-3xl rounded-2xl lg:w-[30vw] w-[160px]
       bg-white hover:border-[#00a2ff]">
     <span className="text-[#00a2ff]">10% list growth</span> & <br/> <span className="font-bold">sales spike in tough niche 
      </span><br/>
     <br/>
     <p className=" text-black font-semibold text-[10px] lg:text-lg">It's nice that with Getresponse,
       we have the tools and integrations we need within our budget.</p><br/>
     <button className="text-white mt-0.5 lg:mt-7 px-[20px] lg:px-8 hover:bg-[#fbe30c] hover:text-black bg-[#00a2ff] 
     py-3 border-spacing-2 rounded-2xl text-[10px] lg:text-xl flex items-center">Read case study
     <FaArrowRightLong className="text-xm mt-1"/></button>
     </li>
     <li className=" lg:text-3xl text-[20px] font-bold px-[20px] lg:px-10 text-left
      border-2 h-[45vh] lg:h-[80vh] rounded-2xl w-[170px] lg:w-[30vw] py-10 bg-white hover:border-[#00a2ff]">
       <span className="text-[#00a2ff]">75% of all public sales</span> <span className="font-bold">from email autoresponders</span> 
       <br/>
       <br/>
       <p className="text-black text-[10px] lg:text-lg font-semibold">Together with Getresponse, we've been able to convince 
         customers of need, culminating in compelling sales.</p> <br/>
        <button className="bg-[#00a2ff] hover:bg-[#fbe30c] hover:text-black text-white mt-2 
        py-3 px-[20px] lg:px-8 border-spacing-2 rounded-2xl text-[10px] lg:text-xl flex items-center ">Read case study
         <FaArrowRightLong className="text-xm mt-1"/> </button>
     </li>
     <li className=" font-bold px-[20px] lg:px-10 text-left border-2 h-[45vh] lg:h-[80vh] text-[20px] 
     lg:text-3xl rounded-2xl w-[160px] lg:w-[30vw] py-10 bg-white hover:border-[#00a2ff]">
     <span className="text-[#00a2ff]">Up tp $1,000</span> <span className="font-bold">for every 1,000 emails sent </span><br/>
     <br/>
     <p className="text-black lg:text-lg text-[10px] font-semibold">Regarding revenue contribution, the email marketing 
      channel is like free money for us.</p><br/>
     <button className="mt-7 py-3 px-2 lg:px-8 hover:bg-[#fbe30c] hover:text-black bg-[#00a2ff] text-white 
     border-spacing-2 rounded-2xl text-10px text-xs lg:text-xl flex items-center ">Read case study
     <FaArrowRightLong className="text-xm mt-1"/></button>
     </li>
  </ul>
 </div>
    
   </section>
);
};
export default HeroSection;