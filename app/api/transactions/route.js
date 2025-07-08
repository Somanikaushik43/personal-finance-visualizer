import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET all transactions
export async function GET() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { date: 'desc' },
  });
  return NextResponse.json(transactions);
}

// POST a new transaction
export async function POST(req) {
  const data = await req.json();
  const newTransaction = await prisma.transaction.create({
    data: {
      description: data.description,
      amount: data.amount,
      date: new Date(data.date),
      category: data.category,
    },
  });
  return NextResponse.json(newTransaction);
}

// DELETE a transaction by id
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  await prisma.transaction.delete({
    where: { id },
  });

  return NextResponse.json({ message: 'Deleted successfully' });
}
