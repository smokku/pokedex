import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexSumFieldsModelBase } from "./PokemonV2LocationgameindexSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexSumFieldsModel */
export interface PokemonV2LocationgameindexSumFieldsModelType extends Instance<typeof PokemonV2LocationgameindexSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexSumFieldsModel */
export { selectFromPokemonV2LocationgameindexSumFields, pokemonV2LocationgameindexSumFieldsModelPrimitives, PokemonV2LocationgameindexSumFieldsModelSelector } from "./PokemonV2LocationgameindexSumFieldsModel.base"

/**
 * PokemonV2LocationgameindexSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2LocationgameindexSumFieldsModel = PokemonV2LocationgameindexSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
