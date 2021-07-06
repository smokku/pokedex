import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributemapVarPopFieldsModelBase } from "./PokemonV2MoveattributemapVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributemapVarPopFieldsModel */
export interface PokemonV2MoveattributemapVarPopFieldsModelType extends Instance<typeof PokemonV2MoveattributemapVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributemapVarPopFieldsModel */
export { selectFromPokemonV2MoveattributemapVarPopFields, pokemonV2MoveattributemapVarPopFieldsModelPrimitives, PokemonV2MoveattributemapVarPopFieldsModelSelector } from "./PokemonV2MoveattributemapVarPopFieldsModel.base"

/**
 * PokemonV2MoveattributemapVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveattributemapVarPopFieldsModel = PokemonV2MoveattributemapVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
