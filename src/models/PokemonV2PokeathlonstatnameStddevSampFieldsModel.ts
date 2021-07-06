import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameStddevSampFieldsModelBase } from "./PokemonV2PokeathlonstatnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameStddevSampFieldsModel */
export interface PokemonV2PokeathlonstatnameStddevSampFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameStddevSampFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameStddevSampFields, pokemonV2PokeathlonstatnameStddevSampFieldsModelPrimitives, PokemonV2PokeathlonstatnameStddevSampFieldsModelSelector } from "./PokemonV2PokeathlonstatnameStddevSampFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokeathlonstatnameStddevSampFieldsModel = PokemonV2PokeathlonstatnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
