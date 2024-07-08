import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RetouchTaskModuleBase } from "./base/retouchTask.module.base";
import { RetouchTaskService } from "./retouchTask.service";
import { RetouchTaskController } from "./retouchTask.controller";
import { RetouchTaskResolver } from "./retouchTask.resolver";

@Module({
  imports: [RetouchTaskModuleBase, forwardRef(() => AuthModule)],
  controllers: [RetouchTaskController],
  providers: [RetouchTaskService, RetouchTaskResolver],
  exports: [RetouchTaskService],
})
export class RetouchTaskModule {}
