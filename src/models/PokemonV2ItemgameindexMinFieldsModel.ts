import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexMinFieldsModelBase } from "./PokemonV2ItemgameindexMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexMinFieldsModel */
export interface PokemonV2ItemgameindexMinFieldsModelType extends Instance<typeof PokemonV2ItemgameindexMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexMinFieldsModel */
export { selectFromPokemonV2ItemgameindexMinFields, pokemonV2ItemgameindexMinFieldsModelPrimitives, PokemonV2ItemgameindexMinFieldsModelSelector } from "./PokemonV2ItemgameindexMinFieldsModel.base"

/**
 * PokemonV2ItemgameindexMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemgameindexMinFieldsModel = PokemonV2ItemgameindexMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
