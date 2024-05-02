import { ErrorWithProps, IResolvers } from 'mercurius'
import { makeCreateStudentUseCase } from '@/factories/create-student-factory'
import { StudentAlreadyExistsError } from '@/application/errors/student-already-exists-error'
import { makeSearchStudentsUseCase } from '@/factories/search-students-factory'

export const resolvers: IResolvers = {
  Mutation: {
    createStudent: async (_root, { input }) => {
      const createStudentUseCase = makeCreateStudentUseCase()
      try {
        return await createStudentUseCase.execute(input!)
      } catch (error: any) {
        if (error instanceof StudentAlreadyExistsError) {
          throw new ErrorWithProps('Student already exists', error, 404)
        }
        throw new ErrorWithProps('Internal Server Error', error, 500)
      }
    },
  },
  Query: {
    searchStudents: async (_root, { input }) => {
      const searchStudentsUseCase = makeSearchStudentsUseCase()
      try {
        const results = await searchStudentsUseCase.execute(input!)
        return {
          students: results.students,
        }
      } catch (error: any) {
        throw new ErrorWithProps('Internal Server Error', error, 500)
      }
    },
  },
}
