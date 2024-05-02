import { InMemoryStudentsRepository } from '@/test/in-memory-repositories/in-memory-students-repository'
import { SearchStudentsUseCase } from '@/application/use-cases/search-students'
import { makeStudent } from '@/test/factories/make-student'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let sut: SearchStudentsUseCase

describe('SearchStudents', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    sut = new SearchStudentsUseCase(inMemoryStudentsRepository)
    for (let i = 0; i < 20; i++) {
      inMemoryStudentsRepository.items.push(
        makeStudent({
          name: i < 10 ? 'John Doe' : 'Jane Doe',
          email: `student${i}@example.com`,
          cpf: `1234567890${i}`,
        }),
      )
    }
  })

  it('should retrieve the second page of students named John Doe', async () => {
    const input = {
      name: 'John Doe',
      page: 2,
      pageSize: 5,
    }

    const result = await sut.execute(input)

    expect(result.students.length).toBe(5)
    expect(
      result.students.every((student) => student.name === 'John Doe'),
    ).toBe(true)
  })

  it('should return all students when no filter is provided', async () => {
    const input = { page: 1, pageSize: 20 }

    const result = await sut.execute(input)

    const countJohnDoe = result.students.filter(
      (student) => student.name === 'John Doe',
    ).length
    const countJaneDoe = result.students.filter(
      (student) => student.name === 'Jane Doe',
    ).length

    expect(countJohnDoe).toBe(10)
    expect(countJaneDoe).toBe(10)
  })
})
