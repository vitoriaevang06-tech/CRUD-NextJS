
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "../../../../lib/prisma";
import { DeleteProduto } from "../../../../lib/actions";

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

  const excluir = DeleteProduto.bind(null, produto.id);

  return (
    <div>
      <h1>Excluir Produto</h1>

      <p>Deseja realmente excluir este produto?</p>

      <p>Descrição: {produto.descricao}</p>
      <p>Preço: R$ {produto.preco.toString()}</p>

      <form action={excluir}>
        <button type="submit">Confirmar exclusão</button>
      </form>

      <Link href="/produto/index">Cancelar</Link>
    </div>
  );
}
