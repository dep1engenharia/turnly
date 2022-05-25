import { EntityAttributes, ICommand } from '@turnly/core'
import { Field } from 'Fields/domain/entities/Field'

export class SaveFieldReadingDBCommand implements ICommand {
  public constructor(public readonly payload: EntityAttributes<Field>) {}
}
