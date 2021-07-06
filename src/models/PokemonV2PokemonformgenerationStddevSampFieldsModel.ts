import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationStddevSampFieldsModelBase } from "./PokemonV2PokemonformgenerationStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationStddevSampFieldsModel */
export interface PokemonV2PokemonformgenerationStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationStddevSampFieldsModel */
export { selectFromPokemonV2PokemonformgenerationStddevSampFields, pokemonV2PokemonformgenerationStddevSampFieldsModelPrimitives, PokemonV2PokemonformgenerationStddevSampFieldsModelSelector } from "./PokemonV2PokemonformgenerationStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonformgenerationStddevSampFieldsModel = PokemonV2PokemonformgenerationStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
