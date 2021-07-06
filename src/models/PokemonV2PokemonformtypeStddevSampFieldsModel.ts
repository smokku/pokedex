import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformtypeStddevSampFieldsModelBase } from "./PokemonV2PokemonformtypeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformtypeStddevSampFieldsModel */
export interface PokemonV2PokemonformtypeStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonformtypeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformtypeStddevSampFieldsModel */
export { selectFromPokemonV2PokemonformtypeStddevSampFields, pokemonV2PokemonformtypeStddevSampFieldsModelPrimitives, PokemonV2PokemonformtypeStddevSampFieldsModelSelector } from "./PokemonV2PokemonformtypeStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonformtypeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonformtypeStddevSampFieldsModel = PokemonV2PokemonformtypeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
