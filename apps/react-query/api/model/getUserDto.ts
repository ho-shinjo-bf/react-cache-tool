/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * react-cache-tools backend
 * The react-cache-tools backend API description
 * OpenAPI spec version: 1.0
 */
import type { GetUserDtoSex } from "./getUserDtoSex";

export interface GetUserDto {
  age: number;
  email: string;
  id: string;
  name: string;
  note?: string;
  sex: GetUserDtoSex;
}
