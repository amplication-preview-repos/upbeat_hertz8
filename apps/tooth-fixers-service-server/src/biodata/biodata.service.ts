import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BiodataServiceBase } from "./base/biodata.service.base";

@Injectable()
export class BiodataService extends BiodataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
