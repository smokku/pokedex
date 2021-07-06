import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonevolutionStddevSampFieldsModelBase } from "./PokemonV2PokemonevolutionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonevolutionStddevSampFieldsModel */
export interface PokemonV2PokemonevolutionStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonevolutionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonevolutionStddevSampFieldsModel */
export { selectFromPokemonV2PokemonevolutionStddevSampFields, pokemonV2PokemonevolutionStddevSampFieldsModelPrimitives, PokemonV2PokemonevolutionStddevSampFieldsModelSelector } from "./PokemonV2PokemonevolutionStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonevolutionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonevolutionStddevSampFieldsModel = PokemonV2PokemonevolutionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
