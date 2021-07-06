import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryStddevSampFieldsModelBase } from "./PokemonV2ItemcategoryStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryStddevSampFieldsModel */
export interface PokemonV2ItemcategoryStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemcategoryStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryStddevSampFieldsModel */
export { selectFromPokemonV2ItemcategoryStddevSampFields, pokemonV2ItemcategoryStddevSampFieldsModelPrimitives, PokemonV2ItemcategoryStddevSampFieldsModelSelector } from "./PokemonV2ItemcategoryStddevSampFieldsModel.base"

/**
 * PokemonV2ItemcategoryStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemcategoryStddevSampFieldsModel = PokemonV2ItemcategoryStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
