import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityStddevSampFieldsModelBase } from "./PokemonV2PokemonabilityStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityStddevSampFieldsModel */
export interface PokemonV2PokemonabilityStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonabilityStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityStddevSampFieldsModel */
export { selectFromPokemonV2PokemonabilityStddevSampFields, pokemonV2PokemonabilityStddevSampFieldsModelPrimitives, PokemonV2PokemonabilityStddevSampFieldsModelSelector } from "./PokemonV2PokemonabilityStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonabilityStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonabilityStddevSampFieldsModel = PokemonV2PokemonabilityStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
