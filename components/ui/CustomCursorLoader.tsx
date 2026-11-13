"use client";

import dynamic from "next/dynamic";

const CustomCursorDynamic = dynamic(
  () => import("./CustomCursor").then((m) => ({ default: m.CustomCursor })),
  { ssr: false }
);

export function CustomCursorLoader() {
  return <CustomCursorDynamic />;
}

