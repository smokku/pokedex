import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatAvgFieldsModelBase } from "./PokemonV2PokemonhabitatAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatAvgFieldsModel */
export interface PokemonV2PokemonhabitatAvgFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatAvgFieldsModel */
export { selectFromPokemonV2PokemonhabitatAvgFields, pokemonV2PokemonhabitatAvgFieldsModelPrimitives, PokemonV2PokemonhabitatAvgFieldsModelSelector } from "./PokemonV2PokemonhabitatAvgFieldsModel.base"

/**
 * PokemonV2PokemonhabitatAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonhabitatAvgFieldsModel = PokemonV2PokemonhabitatAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
