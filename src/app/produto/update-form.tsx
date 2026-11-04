
import { UpdateProduto } from "../../lib/actions";

export default function UpdateForm({
  id,
  descricao,
  preco,
}: {
  id: number;
  descricao: string;
  preco: string;
}) {
  const atualizar = UpdateProduto.bind(null, id);

  return (
    <form action={atualizar}>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <input
          id="descricao"
          name="descricao"
          defaultValue={descricao}
          maxLength={50}
          required
        />
      </div>

      <div>
        <label htmlFor="preco">Preço:</label>
        <input
          id="preco"
          name="preco"
          type="number"
          step="0.01"
          min="0"
          defaultValue={preco}
          required
        />
      </div>

      <button type="submit">Salvar alterações</button>
    </form>
  );
}
