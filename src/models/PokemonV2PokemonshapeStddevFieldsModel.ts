import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeStddevFieldsModelBase } from "./PokemonV2PokemonshapeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeStddevFieldsModel */
export interface PokemonV2PokemonshapeStddevFieldsModelType extends Instance<typeof PokemonV2PokemonshapeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeStddevFieldsModel */
export { selectFromPokemonV2PokemonshapeStddevFields, pokemonV2PokemonshapeStddevFieldsModelPrimitives, PokemonV2PokemonshapeStddevFieldsModelSelector } from "./PokemonV2PokemonshapeStddevFieldsModel.base"

/**
 * PokemonV2PokemonshapeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2PokemonshapeStddevFieldsModel = PokemonV2PokemonshapeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
