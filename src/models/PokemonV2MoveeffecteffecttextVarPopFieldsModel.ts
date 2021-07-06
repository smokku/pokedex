import { Instance } from "mobx-state-tree"
import { PokemonV2MoveeffecteffecttextVarPopFieldsModelBase } from "./PokemonV2MoveeffecteffecttextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveeffecteffecttextVarPopFieldsModel */
export interface PokemonV2MoveeffecteffecttextVarPopFieldsModelType extends Instance<typeof PokemonV2MoveeffecteffecttextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveeffecteffecttextVarPopFieldsModel */
export { selectFromPokemonV2MoveeffecteffecttextVarPopFields, pokemonV2MoveeffecteffecttextVarPopFieldsModelPrimitives, PokemonV2MoveeffecteffecttextVarPopFieldsModelSelector } from "./PokemonV2MoveeffecteffecttextVarPopFieldsModel.base"

/**
 * PokemonV2MoveeffecteffecttextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2MoveeffecteffecttextVarPopFieldsModel = PokemonV2MoveeffecteffecttextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
