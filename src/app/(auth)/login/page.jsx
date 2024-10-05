import Link from "next/link";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="border flex flex-col items-center p-6 gap-4 shadow-2xl">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="Username">Username</label>
          <input className="border border-green-700" type="text" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Password">Password</label>
          <input className="border border-green-700" type="password" />
        </div>
        <Link
          href={"/dashboard"}
          className="bg-green-700 px-12 py-1 rounded-lg text-white text-xl"
        >
          Login
        </Link>
      </form>
    </div>
  );
}

export default Login;
