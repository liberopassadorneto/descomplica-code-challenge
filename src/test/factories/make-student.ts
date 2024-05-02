import { Student, StudentProps } from '../../domain/entities/student'
import { UniqueEntityID } from '../../domain/entities/unique-entity-id'
import { faker } from '@faker-js/faker'

export function makeStudent(
  override: Partial<StudentProps> = {},
  id?: UniqueEntityID,
) {
  return Student.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      cpf: faker.string.numeric(11),
      ...override,
    },
    id,
  )
}
