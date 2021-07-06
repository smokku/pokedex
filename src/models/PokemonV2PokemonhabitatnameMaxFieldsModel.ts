import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameMaxFieldsModelBase } from "./PokemonV2PokemonhabitatnameMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameMaxFieldsModel */
export interface PokemonV2PokemonhabitatnameMaxFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameMaxFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameMaxFields, pokemonV2PokemonhabitatnameMaxFieldsModelPrimitives, PokemonV2PokemonhabitatnameMaxFieldsModelSelector } from "./PokemonV2PokemonhabitatnameMaxFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonhabitatnameMaxFieldsModel = PokemonV2PokemonhabitatnameMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
