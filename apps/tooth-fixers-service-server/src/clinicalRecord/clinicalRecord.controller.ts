import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClinicalRecordService } from "./clinicalRecord.service";
import { ClinicalRecordControllerBase } from "./base/clinicalRecord.controller.base";

@swagger.ApiTags("clinicalRecords")
@common.Controller("clinicalRecords")
export class ClinicalRecordController extends ClinicalRecordControllerBase {
  constructor(protected readonly service: ClinicalRecordService) {
    super(service);
  }
}
