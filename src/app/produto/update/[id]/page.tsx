
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "../../../../lib/prisma";
import UpdateForm from "../../update-form";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const produtoId = Number(id);

  if (!Number.isInteger(produtoId) || produtoId <= 0) {
    notFound();
  }

  const produto = await prisma.produto.findUnique({
    where: { id: produtoId },
  });

  if (!produto) {
    notFound();
  }

  return (
    <div>
      <h1>Alterar Produto</h1>

      <UpdateForm
        id={produto.id}
        descricao={produto.descricao}
        preco={produto.preco.toString()}
      />

      <Link href="/produto/index">Voltar</Link>
    </div>
  );
}
