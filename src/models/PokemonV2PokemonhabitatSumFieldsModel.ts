import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatSumFieldsModelBase } from "./PokemonV2PokemonhabitatSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatSumFieldsModel */
export interface PokemonV2PokemonhabitatSumFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatSumFieldsModel */
export { selectFromPokemonV2PokemonhabitatSumFields, pokemonV2PokemonhabitatSumFieldsModelPrimitives, PokemonV2PokemonhabitatSumFieldsModelSelector } from "./PokemonV2PokemonhabitatSumFieldsModel.base"

/**
 * PokemonV2PokemonhabitatSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonhabitatSumFieldsModel = PokemonV2PokemonhabitatSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
