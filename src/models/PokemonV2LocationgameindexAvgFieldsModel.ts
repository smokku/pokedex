import { Instance } from "mobx-state-tree"
import { PokemonV2LocationgameindexAvgFieldsModelBase } from "./PokemonV2LocationgameindexAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationgameindexAvgFieldsModel */
export interface PokemonV2LocationgameindexAvgFieldsModelType extends Instance<typeof PokemonV2LocationgameindexAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationgameindexAvgFieldsModel */
export { selectFromPokemonV2LocationgameindexAvgFields, pokemonV2LocationgameindexAvgFieldsModelPrimitives, PokemonV2LocationgameindexAvgFieldsModelSelector } from "./PokemonV2LocationgameindexAvgFieldsModel.base"

/**
 * PokemonV2LocationgameindexAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2LocationgameindexAvgFieldsModel = PokemonV2LocationgameindexAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
