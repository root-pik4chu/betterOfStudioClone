
import PageTwoPcView from "./PageTwoPcView";



function PageTwo() {

  // const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 500);



  return (
    <div className="p-2">
      {/* Mobile View: Separate Divs */}
      <div className="sm:block hidden">
        <PageTwoPcView />
      </div>

      {/* Desktop View: Separate Part */}
      <div className="sm:hidden block">
        <YewalaPart1 />
      </div>
    </div>
  );

  // return (
  //   <div className="w-full h-[230vh] bg-zinc-200 overflow-hidden text-white">
  //     <div className="w-full h-full " data-scroll data-scroll-speed="-.4">

  //     </div>
  //   </div>
  // );
}

const YewalaPart1 = () => (
  <div className="w-full sm:h-200vh h-[90vh]">
    <div className="w-full  h-full">
      <div className="w-full h-[50%] ">
        <div className="w-full h-[5vh] flex items-center text-[5.2vw] uppercase">
          ● Projects (BO® — 02)
        </div>
        <div className="w-full h-[30vh]  text-[32vw] uppercase font-[ff] leading-none flex flex-col justify-center">
          <div className="">
            <h1>premium</h1>
          </div>
          <div className="-mt-[10vw]">
            <h1>Work</h1>
          </div>
        </div>
        <div className="text-[5vw] flex items-center  ">
          <p className="border-b border-zinc-600">see all our work</p>
        </div>
      </div>
      <div className="w-full h-[40%] flex items-center">
        <video
          className=""
          loop
          muted
          autoPlay
          src="https://download-video-ak.vimeocdn.com/v3-1/playback/dd046d05-211c-474a-88ae-e1fb80b38bb8/aaf6bf39-a5cbc5f1?__token__=st=1732357877~exp=1732372277~acl=%2Fv3-1%2Fplayback%2Fdd046d05-211c-474a-88ae-e1fb80b38bb8%2Faaf6bf39-a5cbc5f1%2A~hmac=84db934481178da10b9d3a42d7937c18255b2c2fdbb346847091d95ffe0f522c&r=dXMtY2VudHJhbDE%3D"
        ></video>
      </div>
    </div>
  </div>
);

// const YewalaPart2 = () => (
  
// );
export default PageTwo;
