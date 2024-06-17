import * as graphql from "@nestjs/graphql";
import { ClinicalRecordResolverBase } from "./base/clinicalRecord.resolver.base";
import { ClinicalRecord } from "./base/ClinicalRecord";
import { ClinicalRecordService } from "./clinicalRecord.service";

@graphql.Resolver(() => ClinicalRecord)
export class ClinicalRecordResolver extends ClinicalRecordResolverBase {
  constructor(protected readonly service: ClinicalRecordService) {
    super(service);
  }
}
