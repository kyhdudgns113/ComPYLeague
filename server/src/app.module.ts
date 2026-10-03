import {Module} from '@nestjs/common'

import * as M from './modules'

@Module({
  imports: [
    // ::
    M.DatabaseModule,
    M.SettingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
