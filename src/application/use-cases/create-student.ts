import { Student } from '@/domain/entities/student.js'
import { StudentsRepository } from '@/application/repositories/students-repository.js'
import { StudentAlreadyExistsError } from '@/application/errors/student-already-exists-error'

export type CreateStudentUseCaseInput = {
  name: string
  cpf: string
  email: string
}

type CreateStudentUseCaseOutput = {
  studentId: string
}

export class CreateStudentUseCase {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async execute(
    input: CreateStudentUseCaseInput,
  ): Promise<CreateStudentUseCaseOutput> {
    const studentAlreadyExists = await this.studentsRepository.findByEmail(
      input.email,
    )
    if (studentAlreadyExists) {
      throw new StudentAlreadyExistsError()
    }
    const student = Student.create({
      name: input.name,
      email: input.email,
      cpf: input.cpf,
    })
    await this.studentsRepository.save(student)
    return {
      studentId: student.id.toString(),
    }
  }
}
