import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesnameVarPopFieldsModelBase } from "./PokemonV2PokemonspeciesnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesnameVarPopFieldsModel */
export interface PokemonV2PokemonspeciesnameVarPopFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesnameVarPopFieldsModel */
export { selectFromPokemonV2PokemonspeciesnameVarPopFields, pokemonV2PokemonspeciesnameVarPopFieldsModelPrimitives, PokemonV2PokemonspeciesnameVarPopFieldsModelSelector } from "./PokemonV2PokemonspeciesnameVarPopFieldsModel.base"

/**
 * PokemonV2PokemonspeciesnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokemonspeciesnameVarPopFieldsModel = PokemonV2PokemonspeciesnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
