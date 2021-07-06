import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonmoveStddevFieldsModelBase } from "./PokemonV2PokemonmoveStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonmoveStddevFieldsModel */
export interface PokemonV2PokemonmoveStddevFieldsModelType extends Instance<typeof PokemonV2PokemonmoveStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonmoveStddevFieldsModel */
export { selectFromPokemonV2PokemonmoveStddevFields, pokemonV2PokemonmoveStddevFieldsModelPrimitives, PokemonV2PokemonmoveStddevFieldsModelSelector } from "./PokemonV2PokemonmoveStddevFieldsModel.base"

/**
 * PokemonV2PokemonmoveStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonmoveStddevFieldsModel = PokemonV2PokemonmoveStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
