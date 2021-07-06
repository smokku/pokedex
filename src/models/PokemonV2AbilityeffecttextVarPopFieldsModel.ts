import { Instance } from "mobx-state-tree"
import { PokemonV2AbilityeffecttextVarPopFieldsModelBase } from "./PokemonV2AbilityeffecttextVarPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2AbilityeffecttextVarPopFieldsModel */
export interface PokemonV2AbilityeffecttextVarPopFieldsModelType extends Instance<typeof PokemonV2AbilityeffecttextVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2AbilityeffecttextVarPopFieldsModel */
export { selectFromPokemonV2AbilityeffecttextVarPopFields, pokemonV2AbilityeffecttextVarPopFieldsModelPrimitives, PokemonV2AbilityeffecttextVarPopFieldsModelSelector } from "./PokemonV2AbilityeffecttextVarPopFieldsModel.base"

/**
 * PokemonV2AbilityeffecttextVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const PokemonV2AbilityeffecttextVarPopFieldsModel = PokemonV2AbilityeffecttextVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
