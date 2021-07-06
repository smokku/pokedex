import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameStddevSampFieldsModelBase } from "./PokemonV2ItemattributenameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameStddevSampFieldsModel */
export interface PokemonV2ItemattributenameStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemattributenameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameStddevSampFieldsModel */
export { selectFromPokemonV2ItemattributenameStddevSampFields, pokemonV2ItemattributenameStddevSampFieldsModelPrimitives, PokemonV2ItemattributenameStddevSampFieldsModelSelector } from "./PokemonV2ItemattributenameStddevSampFieldsModel.base"

/**
 * PokemonV2ItemattributenameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemattributenameStddevSampFieldsModel = PokemonV2ItemattributenameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
