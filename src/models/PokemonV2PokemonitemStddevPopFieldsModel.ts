import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonitemStddevPopFieldsModelBase } from "./PokemonV2PokemonitemStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonitemStddevPopFieldsModel */
export interface PokemonV2PokemonitemStddevPopFieldsModelType extends Instance<typeof PokemonV2PokemonitemStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonitemStddevPopFieldsModel */
export { selectFromPokemonV2PokemonitemStddevPopFields, pokemonV2PokemonitemStddevPopFieldsModelPrimitives, PokemonV2PokemonitemStddevPopFieldsModelSelector } from "./PokemonV2PokemonitemStddevPopFieldsModel.base"

/**
 * PokemonV2PokemonitemStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2PokemonitemStddevPopFieldsModel = PokemonV2PokemonitemStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
