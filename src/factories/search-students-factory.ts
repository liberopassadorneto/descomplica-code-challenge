import { PrismaStudentsRepository } from '@/infra/database/prisma/repositories/prisma-students-repository'
import { prismaClient } from '@/infra/database/prisma/prisma-client'
import { SearchStudentsUseCase } from '@/application/use-cases/search-students'

export function makeSearchStudentsUseCase(): SearchStudentsUseCase {
  const prismaStudentsRepository = new PrismaStudentsRepository(prismaClient)
  return new SearchStudentsUseCase(prismaStudentsRepository)
}
