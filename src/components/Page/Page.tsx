import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
  fullWidth: boolean;
}
function Page({ title, fullWidth, children }: PropsWithChildren<PageProps>) {
  return (
    <main
      data-full-width={fullWidth}
      className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch"
    >
      {title && (
        <h2 className="font-bold text-3xl text-center my-12">{title}</h2>
      )}
      {children}
    </main>
  );
}

export default Page;
