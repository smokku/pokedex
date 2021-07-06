import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonformgenerationVarPopFieldsModelBase } from "./PokemonV2PokemonformgenerationVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonformgenerationVarPopFieldsModel */
export interface PokemonV2PokemonformgenerationVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonformgenerationVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonformgenerationVarPopFieldsModel */
export { selectFromPokemonV2PokemonformgenerationVarPopFields, pokemonV2PokemonformgenerationVarPopFieldsModelPrimitives, PokemonV2PokemonformgenerationVarPopFieldsModelSelector } from "./PokemonV2PokemonformgenerationVarPopFieldsModel.base"

/**
 * PokemonV2PokemonformgenerationVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonformgenerationVarPopFieldsModel = PokemonV2PokemonformgenerationVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
