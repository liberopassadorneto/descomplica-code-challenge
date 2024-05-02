import { InMemoryStudentsRepository } from '@/test/in-memory-repositories/in-memory-students-repository'
import {
  CreateStudentUseCase,
  CreateStudentUseCaseInput,
} from '@/application/use-cases/create-student'
import { faker } from '@faker-js/faker'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let sut: CreateStudentUseCase

describe('CreateStudent', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    sut = new CreateStudentUseCase(inMemoryStudentsRepository)
  })

  it('should create a student', async () => {
    const input: CreateStudentUseCaseInput = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      cpf: faker.string.numeric(11),
    }
    const result = await sut.execute(input)
    expect(result.studentId).toBeDefined()
    expect(inMemoryStudentsRepository.items[0]).toEqual(
      expect.objectContaining({
        name: input.name,
        email: input.email,
        cpf: input.cpf,
      }),
    )
  })
})
