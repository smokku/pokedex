import { Instance } from "mobx-state-tree"
import { PokemonV2TypegameindexStddevPopFieldsModelBase } from "./PokemonV2TypegameindexStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2TypegameindexStddevPopFieldsModel */
export interface PokemonV2TypegameindexStddevPopFieldsModelType extends Instance<typeof PokemonV2TypegameindexStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2TypegameindexStddevPopFieldsModel */
export { selectFromPokemonV2TypegameindexStddevPopFields, pokemonV2TypegameindexStddevPopFieldsModelPrimitives, PokemonV2TypegameindexStddevPopFieldsModelSelector } from "./PokemonV2TypegameindexStddevPopFieldsModel.base"

/**
 * PokemonV2TypegameindexStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2TypegameindexStddevPopFieldsModel = PokemonV2TypegameindexStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
