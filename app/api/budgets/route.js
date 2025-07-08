import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all budgets
export async function GET() {
  const budgets = await prisma.budget.findMany();
  return NextResponse.json(budgets);
}

// POST a new budget
export async function POST(request) {
  const body = await request.json();
  const newBudget = await prisma.budget.create({
    data: {
      category: body.category,
      limit: body.limit,
    },
  });
  return NextResponse.json(newBudget);
}

// PUT to update a budget by category
export async function PUT(request) {
  const body = await request.json();
  const updatedBudget = await prisma.budget.updateMany({
    where: { category: body.category },
    data: { limit: body.limit },
  });
  return NextResponse.json(updatedBudget);
}
