/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ClinicalRecordWhereUniqueInput } from "../../clinicalRecord/base/ClinicalRecordWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ClinicalRecordCreateNestedManyWithoutBiodataItemsInput {
  @Field(() => [ClinicalRecordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ClinicalRecordWhereUniqueInput],
  })
  connect?: Array<ClinicalRecordWhereUniqueInput>;
}

export { ClinicalRecordCreateNestedManyWithoutBiodataItemsInput as ClinicalRecordCreateNestedManyWithoutBiodataItemsInput };