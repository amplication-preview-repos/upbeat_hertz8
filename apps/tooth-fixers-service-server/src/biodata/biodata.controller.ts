import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BiodataService } from "./biodata.service";
import { BiodataControllerBase } from "./base/biodata.controller.base";

@swagger.ApiTags("biodata")
@common.Controller("biodata")
export class BiodataController extends BiodataControllerBase {
  constructor(protected readonly service: BiodataService) {
    super(service);
  }
}
