import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatMinFieldsModelBase } from "./PokemonV2PokemonhabitatMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatMinFieldsModel */
export interface PokemonV2PokemonhabitatMinFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatMinFieldsModel */
export { selectFromPokemonV2PokemonhabitatMinFields, pokemonV2PokemonhabitatMinFieldsModelPrimitives, PokemonV2PokemonhabitatMinFieldsModelSelector } from "./PokemonV2PokemonhabitatMinFieldsModel.base"

/**
 * PokemonV2PokemonhabitatMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PokemonhabitatMinFieldsModel = PokemonV2PokemonhabitatMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
