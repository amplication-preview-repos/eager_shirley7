import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RetouchTaskResolverBase } from "./base/retouchTask.resolver.base";
import { RetouchTask } from "./base/RetouchTask";
import { RetouchTaskService } from "./retouchTask.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RetouchTask)
export class RetouchTaskResolver extends RetouchTaskResolverBase {
  constructor(
    protected readonly service: RetouchTaskService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
