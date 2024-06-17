import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClinicalRecordServiceBase } from "./base/clinicalRecord.service.base";

@Injectable()
export class ClinicalRecordService extends ClinicalRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
