import { connectDB } from '@/lib/connectDB';
import { Budget } from '@/models/Budget';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  const budgets = await Budget.find();
  return NextResponse.json(budgets);
}

export async function POST(request) {
  await connectDB();
  const body = await request.json();
  const newBudget = await Budget.create(body);
  return NextResponse.json(newBudget);
}

export async function PUT(request) {
  await connectDB();
  const body = await request.json();
  const updatedBudget = await Budget.findOneAndUpdate(
    { category: body.category },
    { amount: body.amount },
    { new: true }
  );
  return NextResponse.json(updatedBudget);
}