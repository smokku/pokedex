import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameStddevSampFieldsModelBase } from "./PokemonV2ItemcategorynameStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameStddevSampFieldsModel */
export interface PokemonV2ItemcategorynameStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameStddevSampFieldsModel */
export { selectFromPokemonV2ItemcategorynameStddevSampFields, pokemonV2ItemcategorynameStddevSampFieldsModelPrimitives, PokemonV2ItemcategorynameStddevSampFieldsModelSelector } from "./PokemonV2ItemcategorynameStddevSampFieldsModel.base"

/**
 * PokemonV2ItemcategorynameStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemcategorynameStddevSampFieldsModel = PokemonV2ItemcategorynameStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
