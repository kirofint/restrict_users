import * as tt from 'telegraf/typings/telegram-types.d'
import { User } from '@models/User'
import { DocumentType } from '@typegoose/typegoose'
import { Middleware } from 'telegraf'
import { TelegrafContext } from 'telegraf/typings/context'

declare module 'telegraf' {
  export class Context {
		dbuser: DocumentType<User>
		replyWithMarkdown(
      markdown: string,
      extra?: tt.ExtraEditMessage
    ): Promise<tt.Message>
  }

  export interface Composer<TContext extends Context> {
    action(
      action: string | string[] | RegExp,
      middleware: Middleware<TelegrafContext>,
      ...middlewares: Array<Middleware<TelegrafContext>>
    ): Composer<TContext>
  }
}
