import { Instance } from "mobx-state-tree"
import { PokemonV2RegionMaxFieldsModelBase } from "./PokemonV2RegionMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2RegionMaxFieldsModel */
export interface PokemonV2RegionMaxFieldsModelType extends Instance<typeof PokemonV2RegionMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2RegionMaxFieldsModel */
export { selectFromPokemonV2RegionMaxFields, pokemonV2RegionMaxFieldsModelPrimitives, PokemonV2RegionMaxFieldsModelSelector } from "./PokemonV2RegionMaxFieldsModel.base"

/**
 * PokemonV2RegionMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2RegionMaxFieldsModel = PokemonV2RegionMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
