import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexAvgFieldsModelBase } from "./PokemonV2TypegameindexAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexAvgFieldsModel */
export interface PokemonV2TypegameindexAvgFieldsModelType extends Instance<typeof PokemonV2TypegameindexAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexAvgFieldsModel */
export { selectFromPokemonV2TypegameindexAvgFields, pokemonV2TypegameindexAvgFieldsModelPrimitives, PokemonV2TypegameindexAvgFieldsModelSelector } from "./PokemonV2TypegameindexAvgFieldsModel.base"

/**
 * PokemonV2TypegameindexAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2TypegameindexAvgFieldsModel = PokemonV2TypegameindexAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
