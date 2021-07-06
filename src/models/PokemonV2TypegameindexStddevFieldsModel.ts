import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexStddevFieldsModelBase } from "./PokemonV2TypegameindexStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexStddevFieldsModel */
export interface PokemonV2TypegameindexStddevFieldsModelType extends Instance<typeof PokemonV2TypegameindexStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexStddevFieldsModel */
export { selectFromPokemonV2TypegameindexStddevFields, pokemonV2TypegameindexStddevFieldsModelPrimitives, PokemonV2TypegameindexStddevFieldsModelSelector } from "./PokemonV2TypegameindexStddevFieldsModel.base"

/**
 * PokemonV2TypegameindexStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2TypegameindexStddevFieldsModel = PokemonV2TypegameindexStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
