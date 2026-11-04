
"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreateProduto(formData: FormData) {
  const descricao = String(formData.get("c1") ?? "").trim();
  const preco = Number(formData.get("c2"));

  if (!descricao || descricao.length > 50) {
    throw new Error("Descrição inválida");
  }

  if (!Number.isFinite(preco) || preco < 0) {
    throw new Error("Preço inválido");
  }

  await prisma.produto.create({
    data: {
      descricao,
      preco,
    },
  });

  revalidatePath("/produto/index");
  redirect("/produto/index");
}

export async function UpdateProduto(
  id: number,
  formData: FormData
) {
  const descricao = String(
    formData.get("descricao") ?? ""
  ).trim();

  const precoTexto = String(
    formData.get("preco") ?? ""
  );

  const preco = Number(precoTexto);

  if (!descricao || descricao.length > 50) {
    throw new Error("Descrição inválida");
  }

  if (
    !precoTexto.trim() ||
    !Number.isFinite(preco) ||
    preco < 0
  ) {
    throw new Error("Preço inválido");
  }

  await prisma.produto.update({
    where: { id },
    data: { descricao, preco },
  });

  revalidatePath("/produto/index");
  redirect("/produto/index");
}

export async function DeleteProduto(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("ID inválido");
  }

  await prisma.produto.delete({
    where: { id },
  });

  revalidatePath("/produto/index");
  redirect("/produto/index");
}
