import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonshapeStddevPopFieldsModelBase } from "./PokemonV2PokemonshapeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonshapeStddevPopFieldsModel */
export interface PokemonV2PokemonshapeStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonshapeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonshapeStddevPopFieldsModel */
export { selectFromPokemonV2PokemonshapeStddevPopFields, pokemonV2PokemonshapeStddevPopFieldsModelPrimitives, PokemonV2PokemonshapeStddevPopFieldsModelSelector } from "./PokemonV2PokemonshapeStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonshapeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonshapeStddevPopFieldsModel = PokemonV2PokemonshapeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
