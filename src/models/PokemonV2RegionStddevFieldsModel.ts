import { Instance } from "mobx-state-tree"
import { PokemonV2RegionStddevFieldsModelBase } from "./PokemonV2RegionStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionStddevFieldsModel */
export interface PokemonV2RegionStddevFieldsModelType extends Instance<typeof PokemonV2RegionStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionStddevFieldsModel */
export { selectFromPokemonV2RegionStddevFields, pokemonV2RegionStddevFieldsModelPrimitives, PokemonV2RegionStddevFieldsModelSelector } from "./PokemonV2RegionStddevFieldsModel.base"

/**
 * PokemonV2RegionStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2RegionStddevFieldsModel = PokemonV2RegionStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
