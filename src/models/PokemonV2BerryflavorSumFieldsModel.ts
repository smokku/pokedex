import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorSumFieldsModelBase } from "./PokemonV2BerryflavorSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorSumFieldsModel */
export interface PokemonV2BerryflavorSumFieldsModelType extends Instance<typeof PokemonV2BerryflavorSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorSumFieldsModel */
export { selectFromPokemonV2BerryflavorSumFields, pokemonV2BerryflavorSumFieldsModelPrimitives, PokemonV2BerryflavorSumFieldsModelSelector } from "./PokemonV2BerryflavorSumFieldsModel.base"

/**
 * PokemonV2BerryflavorSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2BerryflavorSumFieldsModel = PokemonV2BerryflavorSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
