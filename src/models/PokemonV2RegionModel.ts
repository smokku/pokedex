import { Instance } from "mobx-state-tree"
import { PokemonV2RegionModelBase } from "./PokemonV2RegionModel.base"

/* The TypeScript type of an instance of PokemonV2RegionModel */
export interface PokemonV2RegionModelType extends Instance<typeof PokemonV2RegionModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionModel */
export { selectFromPokemonV2Region, pokemonV2RegionModelPrimitives, PokemonV2RegionModelSelector } from "./PokemonV2RegionModel.base"

/**
 * PokemonV2RegionModel
 *
 * columns and relationships of "pokemon_v2_region"
 */
export const PokemonV2RegionModel = PokemonV2RegionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
