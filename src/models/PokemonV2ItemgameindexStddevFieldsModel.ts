import { Instance } from "mobx-state-tree"
import { PokemonV2ItemgameindexStddevFieldsModelBase } from "./PokemonV2ItemgameindexStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemgameindexStddevFieldsModel */
export interface PokemonV2ItemgameindexStddevFieldsModelType extends Instance<typeof PokemonV2ItemgameindexStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemgameindexStddevFieldsModel */
export { selectFromPokemonV2ItemgameindexStddevFields, pokemonV2ItemgameindexStddevFieldsModelPrimitives, PokemonV2ItemgameindexStddevFieldsModelSelector } from "./PokemonV2ItemgameindexStddevFieldsModel.base"

/**
 * PokemonV2ItemgameindexStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemgameindexStddevFieldsModel = PokemonV2ItemgameindexStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
