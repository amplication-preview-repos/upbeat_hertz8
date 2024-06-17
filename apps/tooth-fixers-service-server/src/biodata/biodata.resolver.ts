import * as graphql from "@nestjs/graphql";
import { BiodataResolverBase } from "./base/biodata.resolver.base";
import { Biodata } from "./base/Biodata";
import { BiodataService } from "./biodata.service";

@graphql.Resolver(() => Biodata)
export class BiodataResolver extends BiodataResolverBase {
  constructor(protected readonly service: BiodataService) {
    super(service);
  }
}
