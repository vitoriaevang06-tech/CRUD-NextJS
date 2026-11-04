
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-card">
        <div className="home-icon">📦</div>

        <h1>Bem-vindo ao CRUD!</h1>

        <h2>Sistema de Gerenciamento de Produtos</h2>

        <p>Exercício de Next.js</p>

        <p>
          Desenvolvido por:
          <br />
          Camily Felix e Vitória Evangelista
        </p>

        <Link href="/produto/index" className="home-button">
          Acessar Produtos →
        </Link>
      </div>
    </main>
  );
}
