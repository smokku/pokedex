import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicdescriptionVarPopFieldsModelBase } from "./PokemonV2CharacteristicdescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicdescriptionVarPopFieldsModel */
export interface PokemonV2CharacteristicdescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2CharacteristicdescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicdescriptionVarPopFieldsModel */
export { selectFromPokemonV2CharacteristicdescriptionVarPopFields, pokemonV2CharacteristicdescriptionVarPopFieldsModelPrimitives, PokemonV2CharacteristicdescriptionVarPopFieldsModelSelector } from "./PokemonV2CharacteristicdescriptionVarPopFieldsModel.base"

/**
 * PokemonV2CharacteristicdescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2CharacteristicdescriptionVarPopFieldsModel = PokemonV2CharacteristicdescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
