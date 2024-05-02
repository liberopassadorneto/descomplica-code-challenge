import {
  SearchFilters,
  StudentsRepository,
} from '@/application/repositories/students-repository'
import { Student } from '@/domain/entities/student'
import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaStudentMapper } from '@/infra/database/prisma/mappers/prisma-student-mapper'

export class PrismaStudentsRepository implements StudentsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async save(student: Student): Promise<void> {
    const data = PrismaStudentMapper.toPrisma(student)
    await this.prisma.student.create({
      data,
    })
  }

  async findByEmail(email: string): Promise<Student | null> {
    const student = await this.prisma.student.findUnique({
      where: { email },
    })
    if (!student) {
      return null
    }
    return PrismaStudentMapper.toDomain(student)
  }

  async findManyWithPagination({
    name,
    cpf,
    email,
    page = 1,
    pageSize = 10,
  }: SearchFilters): Promise<Student[]> {
    const skip = (page - 1) * pageSize

    if (email) {
      const student = await this.prisma.student.findUnique({
        where: { email },
      })
      if (!student) {
        return []
      }
      const domainStudent = PrismaStudentMapper.toDomain(student)
      return [domainStudent]
    }

    const where: Prisma.StudentWhereInput = {}
    if (name) {
      where.name = { contains: name, mode: 'insensitive' }
    }
    if (cpf) {
      where.cpf = cpf
    }

    const students = await this.prisma.student.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { name: 'asc' },
    })

    return students.map(PrismaStudentMapper.toDomain)
  }
}
