import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RetouchTaskService } from "./retouchTask.service";
import { RetouchTaskControllerBase } from "./base/retouchTask.controller.base";

@swagger.ApiTags("retouchTasks")
@common.Controller("retouchTasks")
export class RetouchTaskController extends RetouchTaskControllerBase {
  constructor(
    protected readonly service: RetouchTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
