import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformVarPopFieldsModelBase } from "./PokemonV2PokemonformVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformVarPopFieldsModel */
export interface PokemonV2PokemonformVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonformVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformVarPopFieldsModel */
export { selectFromPokemonV2PokemonformVarPopFields, pokemonV2PokemonformVarPopFieldsModelPrimitives, PokemonV2PokemonformVarPopFieldsModelSelector } from "./PokemonV2PokemonformVarPopFieldsModel.base"

/**
 * PokemonV2PokemonformVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonformVarPopFieldsModel = PokemonV2PokemonformVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
