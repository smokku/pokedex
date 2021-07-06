import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameMinFieldsModelBase } from "./PokemonV2PokemonhabitatnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameMinFieldsModel */
export interface PokemonV2PokemonhabitatnameMinFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameMinFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameMinFields, pokemonV2PokemonhabitatnameMinFieldsModelPrimitives, PokemonV2PokemonhabitatnameMinFieldsModelSelector } from "./PokemonV2PokemonhabitatnameMinFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonhabitatnameMinFieldsModel = PokemonV2PokemonhabitatnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
