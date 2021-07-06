import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatMaxFieldsModelBase } from "./PokemonV2PokemonhabitatMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatMaxFieldsModel */
export interface PokemonV2PokemonhabitatMaxFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatMaxFieldsModel */
export { selectFromPokemonV2PokemonhabitatMaxFields, pokemonV2PokemonhabitatMaxFieldsModelPrimitives, PokemonV2PokemonhabitatMaxFieldsModelSelector } from "./PokemonV2PokemonhabitatMaxFieldsModel.base"

/**
 * PokemonV2PokemonhabitatMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2PokemonhabitatMaxFieldsModel = PokemonV2PokemonhabitatMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
