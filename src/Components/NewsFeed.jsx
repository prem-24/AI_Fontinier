import Button from "./Button";
import { curve } from "../assets";
import Headers from "./Heading";



export default function NewsFeed() {
    const Circles = () => {
        return (
          <>
            <div className="absolute top-1/2 left-1/2 w-[45.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[35.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[26.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-[13.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          </>
        );
      };
  return (
    <div className="my-[10rem]">

      <div className="relative py-10 z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
           <Circles className="w-full py-10  "/>
          <h1 className="h1 py-6 ">
          Be part of the future of
            <span className="inline-block  py-6 relative">
            AI Frontier{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Unlock the power of AI with AI Frontier. Boost your productivity using Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <Headers/>
    </div>
  )
}
