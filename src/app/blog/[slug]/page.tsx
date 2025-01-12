import Commentbox from "@/app/components/comment";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = `*[_type =='blog' && slug.current == "${slug}"]
  {
  name ,paragraph , image ,block}[0]`;

  const data = await client.fetch(query);
  console.log(data);
  return (
    <article className="mt-12 mb-24 px-4 lg:px-4 flex flex-col gap-y-12">
      {/* Blog Title */}
      <h1 className="text-3xl lg:text-6xl font-extrabold text-center text-dark dark:text-light">
        {data.name}
      </h1>
      {/* Image */}
      {data.image && (
        <div className="relative w-full max-w-4xl mx-auto">
          <Image
            src={urlFor(data.image).url()}
            layout="responsive"
            width={800}
            height={500}
            alt={data.name}
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
      {/* Blog Summary Section */}
      <section className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl lg:text-3xl font-bold text-accentDarkPrimary mb-4">
          Summary
        </h2>
        <p className="text-base lg:text-lg leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {data.paragraph}
        </p>
      </section>

      {/* Author Section */}
      <section className="flex items-center gap-4">
        <Image
          src={urlFor(data.image).url()}
          width={60}
          height={60}
          alt="Author image"
          className="object-cover rounded-full border-2 border-accentDarkPrimary"
        />
        <div>
          <p className="text-lg font-semibold text-dark dark:text-light">
            Author Name
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Published Date
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80 space-y-6">
        <PortableText value={data.block} />
        <Commentbox />
      </section>
    </article>
  );
}
