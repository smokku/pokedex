import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameAvgFieldsModelBase } from "./PokemonV2PokemonhabitatnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameAvgFieldsModel */
export interface PokemonV2PokemonhabitatnameAvgFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameAvgFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameAvgFields, pokemonV2PokemonhabitatnameAvgFieldsModelPrimitives, PokemonV2PokemonhabitatnameAvgFieldsModelSelector } from "./PokemonV2PokemonhabitatnameAvgFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2PokemonhabitatnameAvgFieldsModel = PokemonV2PokemonhabitatnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
