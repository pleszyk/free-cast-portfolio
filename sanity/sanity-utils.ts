import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-06-02";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
    perspective: "published",
  });

  return client.fetch(
    groq`*[_type == "projects"]{
        title,
        description,
        github,
        link,
        "image": image.asset->url
      }`,
    {},
    { cache: "no-store" }
  );
}
