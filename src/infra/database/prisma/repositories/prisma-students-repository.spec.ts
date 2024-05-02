import { PrismaClient } from '@prisma/client'
import { PrismaStudentsRepository } from '@/infra/database/prisma/repositories/prisma-students-repository'
import { makeStudent } from '@/test/factories/make-student'

let prismaClient: PrismaClient
let sut: PrismaStudentsRepository

describe('PrismaStudentsRepository', () => {
  beforeEach(() => {
    prismaClient = new PrismaClient()
    sut = new PrismaStudentsRepository(prismaClient)
  })

  afterEach(async () => {
    await prismaClient.student.deleteMany({})
  })

  it('should correctly apply pagination and filters', async () => {
    const student1 = makeStudent({
      email: 'alice@example.com',
      name: 'Alice',
      cpf: '123.456.789-01',
    })
    const student2 = makeStudent({
      email: 'bob@example.com',
      name: 'Bob',
      cpf: '987.654.321-98',
    })
    const student3 = makeStudent({
      email: 'carol@example.com',
      name: 'Carol',
      cpf: '555.666.777-33',
    })

    await sut.save(student1)
    await sut.save(student2)
    await sut.save(student3)

    const page1 = await sut.findManyWithPagination({ page: 1, pageSize: 2 })
    expect(page1.length).toBe(2)

    const page2 = await sut.findManyWithPagination({ page: 2, pageSize: 2 })
    expect(page2.length).toBe(1)

    const filteredByName = await sut.findManyWithPagination({
      name: 'al',
      page: 1,
      pageSize: 10,
    })
    expect(filteredByName.length).toBe(1)
    expect(filteredByName[0].name).toBe('Alice')
  })
})
