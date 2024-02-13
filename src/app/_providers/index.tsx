import { AuthProvider } from "@/contexts/auth.context";
import { UtilProvider } from "@/contexts/util.context";
import { ReactQueryProvider } from "@/react-query/react-query.context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <UtilProvider>
        <AuthProvider>{children}</AuthProvider>
      </UtilProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
