import { Module } from "@nestjs/common";
import { ClinicalRecordModuleBase } from "./base/clinicalRecord.module.base";
import { ClinicalRecordService } from "./clinicalRecord.service";
import { ClinicalRecordController } from "./clinicalRecord.controller";
import { ClinicalRecordResolver } from "./clinicalRecord.resolver";

@Module({
  imports: [ClinicalRecordModuleBase],
  controllers: [ClinicalRecordController],
  providers: [ClinicalRecordService, ClinicalRecordResolver],
  exports: [ClinicalRecordService],
})
export class ClinicalRecordModule {}
