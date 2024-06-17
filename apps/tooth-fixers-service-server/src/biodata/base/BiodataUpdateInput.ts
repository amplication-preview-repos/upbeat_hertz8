/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClinicalRecordUpdateManyWithoutBiodataItemsInput } from "./ClinicalRecordUpdateManyWithoutBiodataItemsInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BiodataUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ClinicalRecordUpdateManyWithoutBiodataItemsInput,
  })
  @ValidateNested()
  @Type(() => ClinicalRecordUpdateManyWithoutBiodataItemsInput)
  @IsOptional()
  @Field(() => ClinicalRecordUpdateManyWithoutBiodataItemsInput, {
    nullable: true,
  })
  clinicalRecords?: ClinicalRecordUpdateManyWithoutBiodataItemsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfRegistration?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  homeAddress?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  middleName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  surname?: string | null;
}

export { BiodataUpdateInput as BiodataUpdateInput };
