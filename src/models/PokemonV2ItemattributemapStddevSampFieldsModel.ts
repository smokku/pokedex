import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapStddevSampFieldsModelBase } from "./PokemonV2ItemattributemapStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapStddevSampFieldsModel */
export interface PokemonV2ItemattributemapStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemattributemapStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapStddevSampFieldsModel */
export { selectFromPokemonV2ItemattributemapStddevSampFields, pokemonV2ItemattributemapStddevSampFieldsModelPrimitives, PokemonV2ItemattributemapStddevSampFieldsModelSelector } from "./PokemonV2ItemattributemapStddevSampFieldsModel.base"

/**
 * PokemonV2ItemattributemapStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemattributemapStddevSampFieldsModel = PokemonV2ItemattributemapStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
