export default function PageContainer({ children }) {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      {children}
    </div>
  );
}
