import AboutModal from "./AboutModal";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">About</h1>
      <AboutModal />
    </div>
  );
}
