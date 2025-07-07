import { connectDB } from '@/lib/connectDB';
import { Transaction } from '@/models/Transaction';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const transactions = await Transaction.find();
  return NextResponse.json(transactions);
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const newTransaction = await Transaction.create(body);
  return NextResponse.json(newTransaction);
}

export async function DELETE(request) {
  await connectDB();
  const id = request.nextUrl.searchParams.get('id');
  await Transaction.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Deleted successfully' });
}