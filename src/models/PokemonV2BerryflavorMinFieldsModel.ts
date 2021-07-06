import { Instance } from "mobx-state-tree"
import { PokemonV2BerryflavorMinFieldsModelBase } from "./PokemonV2BerryflavorMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryflavorMinFieldsModel */
export interface PokemonV2BerryflavorMinFieldsModelType extends Instance<typeof PokemonV2BerryflavorMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryflavorMinFieldsModel */
export { selectFromPokemonV2BerryflavorMinFields, pokemonV2BerryflavorMinFieldsModelPrimitives, PokemonV2BerryflavorMinFieldsModelSelector } from "./PokemonV2BerryflavorMinFieldsModel.base"

/**
 * PokemonV2BerryflavorMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2BerryflavorMinFieldsModel = PokemonV2BerryflavorMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
