import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonhabitatnameVarPopFieldsModelBase } from "./PokemonV2PokemonhabitatnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonhabitatnameVarPopFieldsModel */
export interface PokemonV2PokemonhabitatnameVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonhabitatnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonhabitatnameVarPopFieldsModel */
export { selectFromPokemonV2PokemonhabitatnameVarPopFields, pokemonV2PokemonhabitatnameVarPopFieldsModelPrimitives, PokemonV2PokemonhabitatnameVarPopFieldsModelSelector } from "./PokemonV2PokemonhabitatnameVarPopFieldsModel.base"

/**
 * PokemonV2PokemonhabitatnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonhabitatnameVarPopFieldsModel = PokemonV2PokemonhabitatnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
