import 'module-alias/register'
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
import '@models'
import { bot } from '@helpers/bot'

bot.launch()