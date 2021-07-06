import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexStddevPopFieldsModelBase } from "./PokemonV2ItemgameindexStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexStddevPopFieldsModel */
export interface PokemonV2ItemgameindexStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemgameindexStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexStddevPopFieldsModel */
export { selectFromPokemonV2ItemgameindexStddevPopFields, pokemonV2ItemgameindexStddevPopFieldsModelPrimitives, PokemonV2ItemgameindexStddevPopFieldsModelSelector } from "./PokemonV2ItemgameindexStddevPopFieldsModel.base"

/**
 * PokemonV2ItemgameindexStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemgameindexStddevPopFieldsModel = PokemonV2ItemgameindexStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
