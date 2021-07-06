import { Instance } from "mobx-state-tree"
import { PokemonV2BerryMinFieldsModelBase } from "./PokemonV2BerryMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2BerryMinFieldsModel */
export interface PokemonV2BerryMinFieldsModelType extends Instance<typeof PokemonV2BerryMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2BerryMinFieldsModel */
export { selectFromPokemonV2BerryMinFields, pokemonV2BerryMinFieldsModelPrimitives, PokemonV2BerryMinFieldsModelSelector } from "./PokemonV2BerryMinFieldsModel.base"

/**
 * PokemonV2BerryMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2BerryMinFieldsModel = PokemonV2BerryMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
