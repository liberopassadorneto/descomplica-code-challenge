import { Student } from '@/domain/entities/student'
import {
  SearchFilters,
  StudentsRepository,
} from '@/application/repositories/students-repository'

export class InMemoryStudentsRepository implements StudentsRepository {
  public items: Student[] = []

  async save(student: Student): Promise<void> {
    this.items.push(student)
  }

  async findByEmail(email: string): Promise<Student | null> {
    const student = this.items.find((student) => student.email === email)
    if (!student) {
      return null
    }
    return student
  }

  async findManyWithPagination(filters: SearchFilters): Promise<Student[]> {
    const { name, cpf, email, page = 1, pageSize = 10 } = filters

    const filteredStudents = this.items.filter((student) => {
      return (
        (!name || student.name.toLowerCase().includes(name.toLowerCase())) &&
        (!cpf || student.cpf === cpf) &&
        (!email || student.email.toLowerCase().includes(email.toLowerCase()))
      )
    })

    return filteredStudents.slice((page - 1) * pageSize, page * pageSize)
  }
}
