import { Instance } from "mobx-state-tree"
import { PokemonV2ItemStddevSampFieldsModelBase } from "./PokemonV2ItemStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemStddevSampFieldsModel */
export interface PokemonV2ItemStddevSampFieldsModelType extends Instance<typeof PokemonV2ItemStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemStddevSampFieldsModel */
export { selectFromPokemonV2ItemStddevSampFields, pokemonV2ItemStddevSampFieldsModelPrimitives, PokemonV2ItemStddevSampFieldsModelSelector } from "./PokemonV2ItemStddevSampFieldsModel.base"

/**
 * PokemonV2ItemStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2ItemStddevSampFieldsModel = PokemonV2ItemStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
