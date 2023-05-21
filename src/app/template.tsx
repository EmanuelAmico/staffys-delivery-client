import Header from "@/components/Header";

export default function Template({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const loggedUser = true;

  if (loggedUser) {
    return (
      <div className="h-screen w-full">
        <Header />
        {children}
      </div>
    );
  }

  return children;
}
