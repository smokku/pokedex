import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemStddevFieldsModelBase } from "./PokemonV2PokemonitemStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemStddevFieldsModel */
export interface PokemonV2PokemonitemStddevFieldsModelType extends Instance<typeof PokemonV2PokemonitemStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemStddevFieldsModel */
export { selectFromPokemonV2PokemonitemStddevFields, pokemonV2PokemonitemStddevFieldsModelPrimitives, PokemonV2PokemonitemStddevFieldsModelSelector } from "./PokemonV2PokemonitemStddevFieldsModel.base"

/**
 * PokemonV2PokemonitemStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonitemStddevFieldsModel = PokemonV2PokemonitemStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
