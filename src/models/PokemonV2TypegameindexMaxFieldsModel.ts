import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexMaxFieldsModelBase } from "./PokemonV2TypegameindexMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexMaxFieldsModel */
export interface PokemonV2TypegameindexMaxFieldsModelType extends Instance<typeof PokemonV2TypegameindexMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexMaxFieldsModel */
export { selectFromPokemonV2TypegameindexMaxFields, pokemonV2TypegameindexMaxFieldsModelPrimitives, PokemonV2TypegameindexMaxFieldsModelSelector } from "./PokemonV2TypegameindexMaxFieldsModel.base"

/**
 * PokemonV2TypegameindexMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2TypegameindexMaxFieldsModel = PokemonV2TypegameindexMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
