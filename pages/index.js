import Head from "next/head";
import InfoWidget from "../components/InfoWidget";
import GalleryWidget from "../components/GalleryWidget";

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment — Neumorphic Widgets</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen p-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-2xl panel p-6" style={{ background: 'linear-gradient(180deg,#22272b, #191b1c)' }}>
            <div className="flex gap-8">
              <div className="w-1/2 pr-6 hidden md:block"></div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="mb-6"><InfoWidget /></div>
                <div><GalleryWidget /></div>
              </div>
            </div>
          </div>
          <div className="mt-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.03), rgba(0,0,0,0.45))' }} />
        </div>
      </main>
    </>
  );
}
