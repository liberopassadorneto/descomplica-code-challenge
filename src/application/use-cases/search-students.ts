import { StudentsRepository } from '@/application/repositories/students-repository'
import { Student } from '@/domain/entities/student'

export type SearchStudentsInput = {
  name?: string
  cpf?: string
  email?: string
  page?: number
  pageSize?: number
}

type SearchStudentsOutput = {
  students: Student[]
}

export class SearchStudentsUseCase {
  constructor(private readonly studentsRepository: StudentsRepository) {}

  async execute(input: SearchStudentsInput): Promise<SearchStudentsOutput> {
    const students = await this.studentsRepository.findManyWithPagination(input)
    return {
      students,
    }
  }
}
