import Image from "next/image";
import Link from "next/link";
import Card from "./components/card";
import { blogData } from "./data/blogData";

export default function Home() {
  return (
    <main>
      <div className="pt-6 pb-12 bg-gray-300">
        <div id="card" className="">
          <h2 className="text-center text-4xl xl:text-5xl">
            Next JS - Latest Articals
          </h2>
          <Link href="/admin">
            <h2 className="text-center text-4xl xl:text-5xl">Admin</h2>
          </Link>
          {/* <link href="/admin">Admin</link> */}
          {/* <!-- container for all cards --> */}
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            {blogData.map((item, i: number) => (
              <>
                <Link href={`/blogs/${item.slug}`}>
                  <Card item={item} />
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
