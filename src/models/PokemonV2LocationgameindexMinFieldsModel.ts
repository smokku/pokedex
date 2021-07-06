import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexMinFieldsModelBase } from "./PokemonV2LocationgameindexMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexMinFieldsModel */
export interface PokemonV2LocationgameindexMinFieldsModelType extends Instance<typeof PokemonV2LocationgameindexMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexMinFieldsModel */
export { selectFromPokemonV2LocationgameindexMinFields, pokemonV2LocationgameindexMinFieldsModelPrimitives, PokemonV2LocationgameindexMinFieldsModelSelector } from "./PokemonV2LocationgameindexMinFieldsModel.base"

/**
 * PokemonV2LocationgameindexMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2LocationgameindexMinFieldsModel = PokemonV2LocationgameindexMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
