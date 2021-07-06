import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveStddevPopFieldsModelBase } from "./PokemonV2PokemonmoveStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveStddevPopFieldsModel */
export interface PokemonV2PokemonmoveStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonmoveStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveStddevPopFieldsModel */
export { selectFromPokemonV2PokemonmoveStddevPopFields, pokemonV2PokemonmoveStddevPopFieldsModelPrimitives, PokemonV2PokemonmoveStddevPopFieldsModelSelector } from "./PokemonV2PokemonmoveStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonmoveStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonmoveStddevPopFieldsModel = PokemonV2PokemonmoveStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
