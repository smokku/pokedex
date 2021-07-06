import { Instance } from "mobx-state-tree"
import { PokemonV2PokemoncolornameStddevSampFieldsModelBase } from "./PokemonV2PokemoncolornameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemoncolornameStddevSampFieldsModel */
export interface PokemonV2PokemoncolornameStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemoncolornameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemoncolornameStddevSampFieldsModel */
export { selectFromPokemonV2PokemoncolornameStddevSampFields, pokemonV2PokemoncolornameStddevSampFieldsModelPrimitives, PokemonV2PokemoncolornameStddevSampFieldsModelSelector } from "./PokemonV2PokemoncolornameStddevSampFieldsModel.base"

/**
 * PokemonV2PokemoncolornameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemoncolornameStddevSampFieldsModel = PokemonV2PokemoncolornameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
