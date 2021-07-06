import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameVarPopFieldsModelBase } from "./PokemonV2PokeathlonstatnameVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameVarPopFieldsModel */
export interface PokemonV2PokeathlonstatnameVarPopFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameVarPopFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameVarPopFields, pokemonV2PokeathlonstatnameVarPopFieldsModelPrimitives, PokemonV2PokeathlonstatnameVarPopFieldsModelSelector } from "./PokemonV2PokeathlonstatnameVarPopFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2PokeathlonstatnameVarPopFieldsModel = PokemonV2PokeathlonstatnameVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
