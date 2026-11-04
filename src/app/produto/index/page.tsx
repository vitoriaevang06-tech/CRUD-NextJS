
import Link from "next/link";
import { IndexProduto as buscarProdutos } from "../../../lib/query";
import IndexTable from "../index-table";

export default async function Page() {
  const dados = await buscarProdutos();

  const produtos = dados.map((produto) => ({
    id: produto.id,
    descricao: produto.descricao,
    preco: produto.preco.toString(),
  }));

  return (
    <div>
      <Link href="/produto/create">
        Novo Produto
      </Link>

      <h1>Index</h1>

      <IndexTable produtos={produtos} />
    </div>
  );
}
