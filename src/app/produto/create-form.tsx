
import { CreateProduto } from "../../lib/actions";

export default function CreateForm() {
  return (
    <form action={CreateProduto}>
      <div>
        <label htmlFor="c1">Descrição:</label>
        <input
          type="text"
          id="c1"
          name="c1"
          maxLength={50}
          required
        />
      </div>

      <div>
        <label htmlFor="c2">Preço:</label>
        <input
          type="number"
          id="c2"
          name="c2"
          min="0"
          step="0.01"
          required
        />
      </div>

      <button type="submit">Gravar</button>
    </form>
  );
}
