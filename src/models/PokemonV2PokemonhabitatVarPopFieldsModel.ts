import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatVarPopFieldsModelBase } from "./PokemonV2PokemonhabitatVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatVarPopFieldsModel */
export interface PokemonV2PokemonhabitatVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatVarPopFieldsModel */
export { selectFromPokemonV2PokemonhabitatVarPopFields, pokemonV2PokemonhabitatVarPopFieldsModelPrimitives, PokemonV2PokemonhabitatVarPopFieldsModelSelector } from "./PokemonV2PokemonhabitatVarPopFieldsModel.base"

/**
 * PokemonV2PokemonhabitatVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonhabitatVarPopFieldsModel = PokemonV2PokemonhabitatVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
