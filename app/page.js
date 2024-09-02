import LoginPage from "@/components/login/loginComponent";

export default async function Home() {
  return (
    <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center px-3 lg:px-6">
      <LoginPage />
    </main>
  );
}
