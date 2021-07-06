import { Instance } from "mobx-state-tree"
import { PokemonV2RegionStddevPopFieldsModelBase } from "./PokemonV2RegionStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionStddevPopFieldsModel */
export interface PokemonV2RegionStddevPopFieldsModelType extends Instance<typeof PokemonV2RegionStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionStddevPopFieldsModel */
export { selectFromPokemonV2RegionStddevPopFields, pokemonV2RegionStddevPopFieldsModelPrimitives, PokemonV2RegionStddevPopFieldsModelSelector } from "./PokemonV2RegionStddevPopFieldsModel.base"

/**
 * PokemonV2RegionStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2RegionStddevPopFieldsModel = PokemonV2RegionStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
