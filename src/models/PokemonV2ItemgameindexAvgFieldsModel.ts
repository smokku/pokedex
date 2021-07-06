import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexAvgFieldsModelBase } from "./PokemonV2ItemgameindexAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexAvgFieldsModel */
export interface PokemonV2ItemgameindexAvgFieldsModelType extends Instance<typeof PokemonV2ItemgameindexAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexAvgFieldsModel */
export { selectFromPokemonV2ItemgameindexAvgFields, pokemonV2ItemgameindexAvgFieldsModelPrimitives, PokemonV2ItemgameindexAvgFieldsModelSelector } from "./PokemonV2ItemgameindexAvgFieldsModel.base"

/**
 * PokemonV2ItemgameindexAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemgameindexAvgFieldsModel = PokemonV2ItemgameindexAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
