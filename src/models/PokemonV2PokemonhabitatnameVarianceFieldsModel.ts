import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameVarianceFieldsModelBase } from "./PokemonV2PokemonhabitatnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameVarianceFieldsModel */
export interface PokemonV2PokemonhabitatnameVarianceFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameVarianceFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameVarianceFields, pokemonV2PokemonhabitatnameVarianceFieldsModelPrimitives, PokemonV2PokemonhabitatnameVarianceFieldsModelSelector } from "./PokemonV2PokemonhabitatnameVarianceFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2PokemonhabitatnameVarianceFieldsModel = PokemonV2PokemonhabitatnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
