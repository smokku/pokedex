import { Instance } from "mobx-state-tree"
import { PokemonV2CharacteristicVarPopFieldsModelBase } from "./PokemonV2CharacteristicVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2CharacteristicVarPopFieldsModel */
export interface PokemonV2CharacteristicVarPopFieldsModelType extends Instance<typeof PokemonV2CharacteristicVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2CharacteristicVarPopFieldsModel */
export { selectFromPokemonV2CharacteristicVarPopFields, pokemonV2CharacteristicVarPopFieldsModelPrimitives, PokemonV2CharacteristicVarPopFieldsModelSelector } from "./PokemonV2CharacteristicVarPopFieldsModel.base"

/**
 * PokemonV2CharacteristicVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2CharacteristicVarPopFieldsModel = PokemonV2CharacteristicVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
