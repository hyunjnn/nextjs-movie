'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center mt-32 px-4 text-center">
      <h1 className="text-2xl font-bold">오류가 발생했어요!</h1>
      <p className="text-gray-400 mt-4 mb-12">
        영화를 불러오는 중 문제가 발생했습니다. <br />
        네트워크 상태를 확인하거나 잠시 후 다시 시도해주세요.
      </p>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => reset()}
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-stone-800 transition"
        >
          다시 시도하기
        </button>
        <Link
          href="/"
          className="bg-white border border-black px-6 py-2 rounded-full text-black hover:bg-gray-100 transition"
        >
          ➝ 홈페이지로 이동
        </Link>
      </div>
    </div>
  );
}
