import { Instance } from "mobx-state-tree"
import { PokemonV2MovebattlestyleStddevSampFieldsModelBase } from "./PokemonV2MovebattlestyleStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovebattlestyleStddevSampFieldsModel */
export interface PokemonV2MovebattlestyleStddevSampFieldsModelType extends Instance<typeof PokemonV2MovebattlestyleStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovebattlestyleStddevSampFieldsModel */
export { selectFromPokemonV2MovebattlestyleStddevSampFields, pokemonV2MovebattlestyleStddevSampFieldsModelPrimitives, PokemonV2MovebattlestyleStddevSampFieldsModelSelector } from "./PokemonV2MovebattlestyleStddevSampFieldsModel.base"

/**
 * PokemonV2MovebattlestyleStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovebattlestyleStddevSampFieldsModel = PokemonV2MovebattlestyleStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
