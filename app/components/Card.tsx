import { HiOutlineExternalLink } from "react-icons/hi";
import { DiGithubFull } from "react-icons/di";
import { Project } from "@/types/Project";

function Card(props: Project) {
  
  const height = props.size === "lg" ? "h-80 p-32" : "h-24";

  return (
    <div
      className={`relative block bg-blend-overlay border border-gray-700 bg-black bg-opacity-25 w-full ${height} overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {props.size === "lg" ? (
        <>
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-4 top-4 z-10 items-center rounded-lg bg-[#e7ecef] hover:bg-[#c4c8cb] p-3 text-xl text-black"
          >
            <HiOutlineExternalLink />
          </a>
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-4 top-4 z-10 items-center rounded-lg bg-[#e7ecef] hover:bg-[#c4c8cb] p-3 text-xl text-black"
          >
            <DiGithubFull />
          </a>
          <div className="absolute italic font-light text-gray-200 bottom-4 left-3 pr-20">
            <h3 className="text-lg md:text-2xl font-medium">{props.title}</h3>

            <p className="text-xs md:text-sm">{props.description}</p>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default Card;
