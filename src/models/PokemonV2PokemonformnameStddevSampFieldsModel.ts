import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameStddevSampFieldsModelBase } from "./PokemonV2PokemonformnameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameStddevSampFieldsModel */
export interface PokemonV2PokemonformnameStddevSampFieldsModelType extends Instance<typeof PokemonV2PokemonformnameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameStddevSampFieldsModel */
export { selectFromPokemonV2PokemonformnameStddevSampFields, pokemonV2PokemonformnameStddevSampFieldsModelPrimitives, PokemonV2PokemonformnameStddevSampFieldsModelSelector } from "./PokemonV2PokemonformnameStddevSampFieldsModel.base"

/**
 * PokemonV2PokemonformnameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PokemonformnameStddevSampFieldsModel = PokemonV2PokemonformnameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
