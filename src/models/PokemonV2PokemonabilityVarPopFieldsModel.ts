import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonabilityVarPopFieldsModelBase } from "./PokemonV2PokemonabilityVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonabilityVarPopFieldsModel */
export interface PokemonV2PokemonabilityVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonabilityVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonabilityVarPopFieldsModel */
export { selectFromPokemonV2PokemonabilityVarPopFields, pokemonV2PokemonabilityVarPopFieldsModelPrimitives, PokemonV2PokemonabilityVarPopFieldsModelSelector } from "./PokemonV2PokemonabilityVarPopFieldsModel.base"

/**
 * PokemonV2PokemonabilityVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonabilityVarPopFieldsModel = PokemonV2PokemonabilityVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
