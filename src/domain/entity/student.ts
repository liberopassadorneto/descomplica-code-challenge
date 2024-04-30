import { Entity } from './entity'
import { UniqueEntityID } from './unique-entity-id'

export interface StudentProps {
  name: string
  cpf: string
  email: string
}

export class Student extends Entity<StudentProps> {
  get name() {
    return this.props.name
  }

  get cpf() {
    return this.props.cpf
  }

  get email() {
    return this.props.email
  }

  static create(props: StudentProps, id?: UniqueEntityID) {
    return new Student(props, id)
  }
}
