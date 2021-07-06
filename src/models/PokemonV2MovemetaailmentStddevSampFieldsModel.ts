import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaailmentStddevSampFieldsModelBase } from "./PokemonV2MovemetaailmentStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaailmentStddevSampFieldsModel */
export interface PokemonV2MovemetaailmentStddevSampFieldsModelType extends Instance<typeof PokemonV2MovemetaailmentStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaailmentStddevSampFieldsModel */
export { selectFromPokemonV2MovemetaailmentStddevSampFields, pokemonV2MovemetaailmentStddevSampFieldsModelPrimitives, PokemonV2MovemetaailmentStddevSampFieldsModelSelector } from "./PokemonV2MovemetaailmentStddevSampFieldsModel.base"

/**
 * PokemonV2MovemetaailmentStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2MovemetaailmentStddevSampFieldsModel = PokemonV2MovemetaailmentStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
