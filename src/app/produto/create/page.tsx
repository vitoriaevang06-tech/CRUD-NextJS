
import Link from "next/link";
import CreateForm from "../create-form";

export default function Page() {
  return (
    <div>
      <h1>Create</h1>

      <CreateForm />

      <Link href="/produto/index">
        Voltar
      </Link>
    </div>
  );
}
