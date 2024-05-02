import { Prisma } from '@prisma/client'
import { Student } from '@/domain/entities/student'
import { UniqueEntityID } from '@/domain/entities/unique-entity-id'

export class PrismaStudentMapper {
  static toDomain(rawData: Prisma.StudentUncheckedCreateInput): Student {
    return Student.create(
      {
        name: rawData.name,
        email: rawData.email,
        cpf: rawData.cpf,
      },
      new UniqueEntityID(rawData.id),
    )
  }

  static toPrisma(student: Student): Prisma.StudentUncheckedCreateInput {
    return {
      name: student.name,
      email: student.email,
      cpf: student.cpf,
      id: student.id.toString(),
    }
  }
}
