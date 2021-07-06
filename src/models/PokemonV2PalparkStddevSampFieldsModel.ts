import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkStddevSampFieldsModelBase } from "./PokemonV2PalparkStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkStddevSampFieldsModel */
export interface PokemonV2PalparkStddevSampFieldsModelType extends Instance<typeof PokemonV2PalparkStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkStddevSampFieldsModel */
export { selectFromPokemonV2PalparkStddevSampFields, pokemonV2PalparkStddevSampFieldsModelPrimitives, PokemonV2PalparkStddevSampFieldsModelSelector } from "./PokemonV2PalparkStddevSampFieldsModel.base"

/**
 * PokemonV2PalparkStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2PalparkStddevSampFieldsModel = PokemonV2PalparkStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
