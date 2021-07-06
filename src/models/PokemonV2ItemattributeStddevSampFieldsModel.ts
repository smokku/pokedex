import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeStddevSampFieldsModelBase } from "./PokemonV2ItemattributeStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeStddevSampFieldsModel */
export interface PokemonV2ItemattributeStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemattributeStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeStddevSampFieldsModel */
export { selectFromPokemonV2ItemattributeStddevSampFields, pokemonV2ItemattributeStddevSampFieldsModelPrimitives, PokemonV2ItemattributeStddevSampFieldsModelSelector } from "./PokemonV2ItemattributeStddevSampFieldsModel.base"

/**
 * PokemonV2ItemattributeStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemattributeStddevSampFieldsModel = PokemonV2ItemattributeStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
