import { Instance } from "mobx-state-tree"
import { PokemonV2LocationMinFieldsModelBase } from "./PokemonV2LocationMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationMinFieldsModel */
export interface PokemonV2LocationMinFieldsModelType extends Instance<typeof PokemonV2LocationMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationMinFieldsModel */
export { selectFromPokemonV2LocationMinFields, pokemonV2LocationMinFieldsModelPrimitives, PokemonV2LocationMinFieldsModelSelector } from "./PokemonV2LocationMinFieldsModel.base"

/**
 * PokemonV2LocationMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2LocationMinFieldsModel = PokemonV2LocationMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
