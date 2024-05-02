import { PrismaStudentsRepository } from '@/infra/database/prisma/repositories/prisma-students-repository'
import { prismaClient } from '@/infra/database/prisma/prisma-client'
import { CreateStudentUseCase } from '@/application/use-cases/create-student'

export function makeCreateStudentUseCase(): CreateStudentUseCase {
  const prismaStudentsRepository = new PrismaStudentsRepository(prismaClient)
  return new CreateStudentUseCase(prismaStudentsRepository)
}
