import { Instance } from "mobx-state-tree"
import { PokemonV2RegionStddevSampFieldsModelBase } from "./PokemonV2RegionStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionStddevSampFieldsModel */
export interface PokemonV2RegionStddevSampFieldsModelType extends Instance<typeof PokemonV2RegionStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionStddevSampFieldsModel */
export { selectFromPokemonV2RegionStddevSampFields, pokemonV2RegionStddevSampFieldsModelPrimitives, PokemonV2RegionStddevSampFieldsModelSelector } from "./PokemonV2RegionStddevSampFieldsModel.base"

/**
 * PokemonV2RegionStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2RegionStddevSampFieldsModel = PokemonV2RegionStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
