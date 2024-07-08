import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RetouchTaskServiceBase } from "./base/retouchTask.service.base";

@Injectable()
export class RetouchTaskService extends RetouchTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
