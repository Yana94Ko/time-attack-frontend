import { UtilProvider } from "@/contexts/util.context";

function Providers({ children }: { children: React.ReactNode }) {
  return <UtilProvider>{children}</UtilProvider>;
}

export default Providers;
