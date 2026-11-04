
import Link from "next/link";
import type { Produto } from "../../lib/definitions";

export default function IndexProduto({
  produtos,
}: {
  produtos: Produto[];
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Preço</th>
          <th colSpan={2}>Ações</th>
        </tr>
      </thead>

      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.descricao}</td>
            <td>R$ {Number(produto.preco).toFixed(2)}</td>

            <td>
              <Link href={`/produto/update/${produto.id}`}>
                Alterar
              </Link>
            </td>

            <td>
              <Link href={`/produto/delete/${produto.id}`}>
                Excluir
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
