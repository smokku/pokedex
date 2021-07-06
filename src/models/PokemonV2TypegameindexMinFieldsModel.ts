import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexMinFieldsModelBase } from "./PokemonV2TypegameindexMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexMinFieldsModel */
export interface PokemonV2TypegameindexMinFieldsModelType extends Instance<typeof PokemonV2TypegameindexMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexMinFieldsModel */
export { selectFromPokemonV2TypegameindexMinFields, pokemonV2TypegameindexMinFieldsModelPrimitives, PokemonV2TypegameindexMinFieldsModelSelector } from "./PokemonV2TypegameindexMinFieldsModel.base"

/**
 * PokemonV2TypegameindexMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2TypegameindexMinFieldsModel = PokemonV2TypegameindexMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
