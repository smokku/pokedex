import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformnameVarPopFieldsModelBase } from "./PokemonV2PokemonformnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformnameVarPopFieldsModel */
export interface PokemonV2PokemonformnameVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonformnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformnameVarPopFieldsModel */
export { selectFromPokemonV2PokemonformnameVarPopFields, pokemonV2PokemonformnameVarPopFieldsModelPrimitives, PokemonV2PokemonformnameVarPopFieldsModelSelector } from "./PokemonV2PokemonformnameVarPopFieldsModel.base"

/**
 * PokemonV2PokemonformnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonformnameVarPopFieldsModel = PokemonV2PokemonformnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
