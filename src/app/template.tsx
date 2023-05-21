export default function Template({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const loggedUser = true;

  if (loggedUser) {
    return (
      <>
        <div className="bg-slate-200 h-12" /> {/* Header */}
        {children}
      </>
    );
  }

  return children;
}
