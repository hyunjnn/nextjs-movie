import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NotFound",
  robots: "noindex",
};

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-3xl font-bold">404 ERROR</h1>
        <p className="body1 text-gray-400 mt-4 mb-10">
          해당 페이지를 찾을 수 없습니다.
        </p>
        <a
          href="/"
          className="flex items-center justify-center rounded-full bg-black text-white h-12 px-8"
        >
          <span>홈페이지로 이동</span>
        </a>
      </div>
    </>
  );
}
