import { Instance } from "mobx-state-tree"
import { PokemonV2MoveattributedescriptionVarPopFieldsModelBase } from "./PokemonV2MoveattributedescriptionVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveattributedescriptionVarPopFieldsModel */
export interface PokemonV2MoveattributedescriptionVarPopFieldsModelType extends Instance<typeof PokemonV2MoveattributedescriptionVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveattributedescriptionVarPopFieldsModel */
export { selectFromPokemonV2MoveattributedescriptionVarPopFields, pokemonV2MoveattributedescriptionVarPopFieldsModelPrimitives, PokemonV2MoveattributedescriptionVarPopFieldsModelSelector } from "./PokemonV2MoveattributedescriptionVarPopFieldsModel.base"

/**
 * PokemonV2MoveattributedescriptionVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveattributedescriptionVarPopFieldsModel = PokemonV2MoveattributedescriptionVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
