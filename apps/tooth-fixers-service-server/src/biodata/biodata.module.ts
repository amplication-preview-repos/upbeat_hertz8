import { Module } from "@nestjs/common";
import { BiodataModuleBase } from "./base/biodata.module.base";
import { BiodataService } from "./biodata.service";
import { BiodataController } from "./biodata.controller";
import { BiodataResolver } from "./biodata.resolver";

@Module({
  imports: [BiodataModuleBase],
  controllers: [BiodataController],
  providers: [BiodataService, BiodataResolver],
  exports: [BiodataService],
})
export class BiodataModule {}
