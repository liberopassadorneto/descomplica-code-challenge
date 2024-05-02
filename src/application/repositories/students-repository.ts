import { Student } from '@/domain/entities/student'

export type SearchFilters = {
  name?: string
  cpf?: string
  email?: string
  page?: number
  pageSize?: number
}

export abstract class StudentsRepository {
  abstract save(student: Student): Promise<void>
  abstract findByEmail(email: string): Promise<Student | null>
  abstract findManyWithPagination(
    searchFilters: SearchFilters,
  ): Promise<Student[]>
}
