import Link from "next/link";

function LayoutBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-green-200 text-gray-800 p-4 flex justify-between items-center flex-col ">
      <div>
        <h2 className="text-xl font-bold">Get 20% off your first purchase!</h2>
        <Link
          href="/shop"
          className="bg-white text-blue-500 hover:bg-blue-700 py-2 px-4 rounded-md"
        >
          Shop Now
        </Link>
      </div>
      {children}
    </div>
  );
}

export default LayoutBanner;
